import { Hono, type Context } from 'hono'

const report = new Hono()

// For client-side demo purposes, reports are stored in-memory.
// In a real application, this would be stored in a database.
const reports: any[] = []

report.post('/reports', async (c: Context) => {
  try {
    // Parse the request body
    const body = await c.req.json()

    // Validate required fields
    // The frontend (eye-witness.tsx) now handles validation before sending.
    // However, a basic check here is still good practice for the API.
    if (!body.typeOfIncident || !body.briefDescription) { // Adjusted to match frontend field names
      return c.json({ error: "Missing required fields (typeOfIncident, briefDescription)" }, 400)
    }

    // Generate a unique tracking ID
    const trackingId = `GBV-${Math.floor(100000 + Math.random() * 900000)}`

    // Create a new report object
    const newReport = {
      id: trackingId,
      status: "Under Review",
      submissionDate: new Date().toISOString(),
      ...body, // Include all fields from the frontend
    }

    // Store in-memory for demo
    reports.push(newReport)

    // Return the tracking ID and status
    return c.json({
      success: true,
      trackingId,
      status: "Under Review",
      message: "Report submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting report:", error)
    return c.json({ error: "Failed to submit report" }, 500)
  }
})

// Endpoint to get all reports for the admin panel (from in-memory storage)
report.get('/reports/all', async (c: Context) => {
  try {
    // Return all reports from in-memory array
    return c.json(reports)
  } catch (error) {
    console.error("Error fetching all reports:", error)
    return c.json({ error: "Failed to fetch reports" }, 500)
  }
})

report.get('/reports', async (c: Context) => {
  // Get the tracking ID from the query parameters
  const trackingId = c.req.query("trackingId")

  // If no tracking ID is provided, return an error
  if (!trackingId) {
    return c.json({ error: "Tracking ID is required" }, 400)
  }

  // Find the report with the matching tracking ID in the in-memory array
  const foundReport = reports.find((r) => r.id === trackingId) // Renamed variable to avoid conflict

  // If no report is found, return a 404 response
  if (!foundReport) {
    return c.json({ error: "Report not found" }, 404)
  }

  // Return the report status and basic information
  return c.json({
    trackingId: foundReport.id,
    status: foundReport.status,
    submissionDate: foundReport.submissionDate,
    // Include more details for the demo if needed, or keep minimal for security
    incidentType: foundReport.typeOfIncident, // Adjusted to frontend field name
    location: foundReport.location,
    briefDescription: foundReport.briefDescription,
    knowPerpetrator: foundReport.knowPerpetrator,
    clientContact: foundReport.clientContact,
    supportAfterSubmitting: foundReport.supportAfterSubmitting,
  })
})

export default report
