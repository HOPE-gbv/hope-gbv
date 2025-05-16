import { Hono, type Context } from 'hono'
import { LAWYERS } from '../../data/config.js'

const LawyerMatch = new Hono()

// Mock data for lawyers - in a real app, this would come from a database


LawyerMatch.post('/lawyer-match', async (c: Context) => {
  try {
    const { severity, violenceType, location, childrenInvolved, urgency, languages, preferredGender } =
      await c.req.json()

    // In a real app, this would use a sophisticated matching algorithm
    
    // For this example, we'll use a simplified matching process

    // Step 1: Filter by specialization based on violence type
    let specialization = "Domestic Violence" // Default
    switch (violenceType) {
      case "physical":
        specialization = "Domestic Violence"
        break
      case "sexual":
        specialization = "Sexual Assault"
        break
      case "stalking":
        specialization = "Stalking"
        break
      case "workplace":
        specialization = "Workplace Harassment"
        break
      // Add other mappings as needed
    }

    let matchedLawyers = LAWYERS.filter((lawyer) => lawyer.specializations.includes(specialization))

    // Step 2: Filter by location if provided
    if (location) {
      const locationMatches = matchedLawyers.filter((lawyer) => lawyer.location === location)
      if (locationMatches.length > 0) {
        matchedLawyers = locationMatches
      }
    }

    // Step 3: Filter by languages if provided
    if (languages && languages.length > 0) {
      const languageMatches = matchedLawyers.filter((lawyer) =>
        languages.some((lang: string) => lawyer.languages.includes(lang)),
      )
      if (languageMatches.length > 0) {
        matchedLawyers = languageMatches
      }
    }

    // Step 4: Sort by criteria based on severity and urgency
    if (severity === "critical" || urgency === "immediate") {
      // For critical cases, prioritize experience and immediate availability
      matchedLawyers.sort((a, b) => {
        // Prioritize immediate availability
        if (a.availability.includes("immediately") && !b.availability.includes("immediately")) return -1
        if (!a.availability.includes("immediately") && b.availability.includes("immediately")) return 1

        // Then prioritize experience
        return b.experience - a.experience
      })
    } else if (severity === "severe") {
      // For severe cases, prioritize success rate and experience
      matchedLawyers.sort((a, b) => {
        const aSuccessRate = Number.parseFloat(a.successRate.replace("%", ""))
        const bSuccessRate = Number.parseFloat(b.successRate.replace("%", ""))

        // First compare success rates
        if (aSuccessRate !== bSuccessRate) return bSuccessRate - aSuccessRate

        // Then compare experience
        return b.experience - a.experience
      })
    } else {
      // For moderate or fair cases, prioritize rating and availability
      matchedLawyers.sort((a, b) => {
        // First compare ratings
        if (a.rating !== b.rating) return b.rating - a.rating

        // Then compare availability (prefer sooner availability)
        if (a.availability.includes("24 hours") && !b.availability.includes("24 hours")) return -1
        if (!a.availability.includes("24 hours") && b.availability.includes("24 hours")) return 1

        return 0
      })
    }

    // Step 5: If children are involved, prioritize lawyers with Child Custody specialization
    if (childrenInvolved === "yes_direct" || childrenInvolved === "yes_witness") {
      const childCustodyLawyers = matchedLawyers.filter((lawyer) => lawyer.specializations.includes("Child Custody"))
      const otherLawyers = matchedLawyers.filter((lawyer) => !lawyer.specializations.includes("Child Custody"))
      matchedLawyers = [...childCustodyLawyers, ...otherLawyers]
    }

    // Return the top 3 matched lawyers
    return c.json({
      success: true,
      matches: matchedLawyers.slice(0, 3),
      severity,
      specialization,
    })
  } catch (error) {
    console.error("Error matching lawyers:", error)
    return c.json({ error: "Failed to match lawyers" }, 500)
  }
})

export default LawyerMatch
