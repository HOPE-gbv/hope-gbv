import { Hono, type Context } from 'hono'
import prisma from '../../db/client' // Assuming default export from client.ts

const reportRoutes = new Hono() // Renamed to avoid conflict with 'report' variable if any

// POST /reports - Submit a new eyewitness report
reportRoutes.post('/reports', async (c: Context) => {
  try {
    const body = await c.req.json()

    // Map frontend field names to Report model fields
    // Required fields based on potential frontend submission and Report model
    const {
      reportAnonymously, // "yes" or "no"
      name, // for clientName
      contact, // for clientContact
      typeOfIncident, // for incidentType
      briefDescription, // No direct field, can be part of incidentType or a new field if model is updated. For now, log it or prepend to a notes field if available.
      location,
      levelOfDanger, // "critical", "severe", "moderate", "low" -> maps to severity and immediateDanger
      evidenceAvailable, // "yes" or "no"
      witnessesAvailable, // "yes" or "no"
      // ... any other fields from eye-witness.tsx
    } = body

    // Basic validation
    if (!typeOfIncident || !location || !levelOfDanger) {
      return c.json({ error: "Missing required fields: typeOfIncident, location, levelOfDanger" }, 400)
    }
    if (reportAnonymously === "no" && (!name || !contact)) {
        return c.json({ error: "Name and contact are required if not reporting anonymously." }, 400);
    }


    // Generate unique ID for the report
    const trackingId = `RPT-${Math.floor(100000 + Math.random() * 900000)}`
    const reportDate = new Date()
    const status = "Under Review" // Default status

    // Determine reportType
    let reportType = "anonymous";
    if (reportAnonymously === "no") {
        reportType = "identified"; // Or "self" / "witness" if more context available
    } else if (body.reportingAs === "witness") { // Assuming a field 'reportingAs' might exist
        reportType = "witness";
    } else if (body.reportingAs === "survivor") {
        reportType = "survivor"; // Or "self"
    }


    // Map severity and immediateDanger from levelOfDanger
    let severity: string;
    let immediateDanger: boolean = false;
    switch (levelOfDanger.toLowerCase()) {
      case "critical":
        severity = "Critical";
        immediateDanger = true;
        break;
      case "severe":
        severity = "Severe";
        immediateDanger = true; // Or based on more specific questions
        break;
      case "moderate":
        severity = "Moderate";
        break;
      case "low":
      default:
        severity = "Low";
        break;
    }

    const newReportData = {
      id: trackingId,
      reportDate,
      reportType, // "anonymous", "identified", "witness", "survivor"
      incidentType: `${typeOfIncident}${briefDescription ? ` - ${briefDescription}` : ''}`, // Combining for now
      location,
      status,
      severity,
      hasEvidence: evidenceAvailable === "yes",
      hasWitnesses: witnessesAvailable === "yes",
      immediateDanger,
      clientName: reportAnonymously === "no" ? name : "Anonymous",
      clientContact: reportAnonymously === "no" ? contact : null,
      // assignedTo: null, // Default, managed by admin
    }

    await prisma.report.create({
      data: newReportData,
    })

    return c.json({
      success: true,
      trackingId,
      status: newReportData.status,
      message: "Report submitted successfully. Your tracking ID is " + trackingId,
    })
  } catch (error: any) {
    console.error("Error submitting report:", error)
    if (error.code === 'P2002') { // Unique constraint violation (e.g. if ID wasn't unique, though unlikely with this generation)
        return c.json({ error: "Failed to submit report due to a conflict. Please try again." }, 409);
    }
    return c.json({ error: "Failed to submit report due to an internal error.", details: error.message }, 500)
  }
})

// GET /reports - Check status of a report by tracking ID
reportRoutes.get('/reports', async (c: Context) => {
  try {
    const trackingId = c.req.query("trackingId")

    if (!trackingId) {
      return c.json({ error: "Tracking ID is required" }, 400)
    }

    const report = await prisma.report.findUnique({
      where: { id: trackingId },
      select: { // Select only necessary fields for status check
        id: true,
        status: true,
        reportDate: true,
        incidentType: true,
        location: true,
        // Potentially add severity or other non-sensitive fields useful for status check
      }
    })

    if (!report) {
      return c.json({ error: "Report not found or invalid Tracking ID" }, 404)
    }

    return c.json({
      trackingId: report.id,
      status: report.status,
      submissionDate: report.reportDate, // Align with model field name
      incidentType: report.incidentType,
      location: report.location,
    })
  } catch (error: any) {
    console.error("Error fetching report status:", error)
    return c.json({ error: "Failed to fetch report status due to an internal error.", details: error.message }, 500)
  }
})

// The GET /reports/all endpoint is removed as per requirements.
// Admin functionality for fetching all reports should be via /admin/reports.

export default reportRoutes
