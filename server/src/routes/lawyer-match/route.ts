import { Hono, type Context } from 'hono'
import prisma from '../../db/client' // Corrected: Use default import

const LawyerMatch = new Hono()

interface LawyerFromDB {
  id: number;
  name: string;
  photo?: string | null;
  location: string;
  specializations: any; // Prisma JSON type, store as string or object after parsing
  rating?: number | null;
  reviews: number;
  verified: boolean;
  active: boolean;
  barNumber: string;
  experience: number;
  languages: any; // Prisma JSON type
  availability?: string | null;
  successRate?: string | null;
  bio?: string | null;
  caseCount: number;
  education?: string | null;
  contactHours?: string | null;
  // Add other fields if necessary, e.g., from relations if you decide to include them
}

interface MatchedLawyer extends Omit<LawyerFromDB, 'specializations' | 'languages'> {
  specializations: string[];
  languages: string[];
}

LawyerMatch.post('/lawyer-match', async (c: Context) => {
  try {
    const { severity, violenceType, location, childrenInvolved, urgency, languages: preferredLanguages, preferredGender } =
      await c.req.json()

    // Fetch all active lawyers from the database
    const dbLawyers: LawyerFromDB[] = await prisma.lawyer.findMany({
      where: { active: true }, // Only match active lawyers
    });

    // Pre-process lawyers: parse JSON fields
    const lawyers: MatchedLawyer[] = dbLawyers.map(lawyer => {
      let parsedSpecializations: string[] = [];
      let parsedLanguages: string[] = [];

      try {
        // specializations and languages are stored as JSON arrays in the DB
        if (typeof lawyer.specializations === 'string') {
            parsedSpecializations = JSON.parse(lawyer.specializations);
        } else if (Array.isArray(lawyer.specializations)) { // if Prisma already parsed it to an array
            parsedSpecializations = lawyer.specializations;
        }
      } catch (e) {
        console.error(`Failed to parse specializations for lawyer ${lawyer.id}:`, lawyer.specializations, e);
      }

      try {
        if (typeof lawyer.languages === 'string') {
            parsedLanguages = JSON.parse(lawyer.languages);
        } else if (Array.isArray(lawyer.languages)) { // if Prisma already parsed it to an array
            parsedLanguages = lawyer.languages;
        }
      } catch (e) {
        console.error(`Failed to parse languages for lawyer ${lawyer.id}:`, lawyer.languages, e);
      }
      
      return {
        ...lawyer,
        specializations: parsedSpecializations,
        languages: parsedLanguages,
      };
    });


    // Step 1: Filter by specialization based on violence type
    let specializationFilter = "Domestic Violence" // Default
    switch (violenceType) {
      case "physical":
        specializationFilter = "Domestic Violence"
        break
      case "sexual":
        specializationFilter = "Sexual Assault"
        break
      case "stalking":
        specializationFilter = "Stalking"
        break
      case "workplace":
        specializationFilter = "Workplace Harassment"
        break
      // Add other mappings as needed
    }

    let matchedLawyers = lawyers.filter((lawyer) => 
      Array.isArray(lawyer.specializations) && lawyer.specializations.includes(specializationFilter)
    );

    // Step 2: Filter by location if provided
    if (location) {
      const locationMatches = matchedLawyers.filter((lawyer) => lawyer.location === location)
      if (locationMatches.length > 0) {
        matchedLawyers = locationMatches
      }
    }

    // Step 3: Filter by languages if provided (preferredLanguages from input)
    if (preferredLanguages && preferredLanguages.length > 0) {
      const languageMatches = matchedLawyers.filter((lawyer) =>
        Array.isArray(lawyer.languages) && preferredLanguages.some((lang: string) => lawyer.languages.includes(lang)),
      )
      if (languageMatches.length > 0) {
        matchedLawyers = languageMatches
      }
    }

    // Step 4: Sort by criteria based on severity and urgency
    matchedLawyers.sort((a, b) => {
      // Handle null or undefined availability, successRate, rating gracefully for sorting
      const aAvailability = a.availability || "";
      const bAvailability = b.availability || "";
      const aSuccessRateNum = a.successRate ? Number.parseFloat(a.successRate.replace("%", "")) : 0;
      const bSuccessRateNum = b.successRate ? Number.parseFloat(b.successRate.replace("%", "")) : 0;
      const aRatingNum = a.rating || 0;
      const bRatingNum = b.rating || 0;

      if (severity === "critical" || urgency === "immediate") {
        if (aAvailability.includes("immediately") && !bAvailability.includes("immediately")) return -1;
        if (!aAvailability.includes("immediately") && bAvailability.includes("immediately")) return 1;
        return b.experience - a.experience;
      } else if (severity === "severe") {
        if (aSuccessRateNum !== bSuccessRateNum) return bSuccessRateNum - aSuccessRateNum;
        return b.experience - a.experience;
      } else { // Moderate or fair
        if (aRatingNum !== bRatingNum) return bRatingNum - aRatingNum;
        if (aAvailability.includes("24 hours") && !bAvailability.includes("24 hours")) return -1;
        if (!aAvailability.includes("24 hours") && bAvailability.includes("24 hours")) return 1;
        return 0;
      }
    });

    // Step 5: If children are involved, prioritize lawyers with Child Custody specialization
    if (childrenInvolved === "yes_direct" || childrenInvolved === "yes_witness") {
      const childCustodyLawyers = matchedLawyers.filter((lawyer) => 
        Array.isArray(lawyer.specializations) && lawyer.specializations.includes("Child Custody")
      );
      const otherLawyers = matchedLawyers.filter((lawyer) => 
        !Array.isArray(lawyer.specializations) || !lawyer.specializations.includes("Child Custody")
      );
      matchedLawyers = [...childCustodyLawyers, ...otherLawyers];
    }

    // Return the top 3 matched lawyers
    return c.json({
      success: true,
      matches: matchedLawyers.slice(0, 3),
      criteria: { // Echo back criteria used for transparency
        severity, 
        violenceType, 
        effectiveSpecialization: specializationFilter,
        location, 
        childrenInvolved, 
        urgency, 
        preferredLanguages, 
        preferredGender 
      }
    });
  } catch (error: any) {
    console.error("Error matching lawyers:", error);
    // Check if it's a Prisma operational error
    if (error.code && error.meta) { // Heuristic for Prisma errors
        return c.json({ error: "Database error while matching lawyers.", details: error.message }, 500);
    }
    return c.json({ error: "Failed to match lawyers due to an internal error." }, 500);
  }
})

export default LawyerMatch
