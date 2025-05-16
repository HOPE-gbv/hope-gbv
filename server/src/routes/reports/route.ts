import { Hono, type Context } from 'hono'

const report = new Hono()

// TODO In a real application, this would be stored in a database
const reports: any[] = []

report.post('/reports', async (c: Context) => {
  try {
    // Parse the request body
    const body = await c.req.json()

    // Validate required fields
    if (!body.incidentType || !body.incidentDescription) {
      return c.json({ error: "Missing required fields" }, 400)
    }

    // Generate a unique tracking ID
    const trackingId = `GBV-${Math.floor(100000 + Math.random() * 900000)}`

    // Create a new report object
    const newReport = {
      id: trackingId,
      status: "Under Review",
      submissionDate: new Date().toISOString(),
      ...body,
    }

    // In a real app, this would be saved to a database
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

report.get('/reports', async (c: Context) => {
  // Get the tracking ID from the query parameters
  const trackingId = c.req.query("trackingId")

  // If no tracking ID is provided, return an error
  if (!trackingId) {
    return c.json({ error: "Tracking ID is required" }, 400)
  }

  // Find the report with the matching tracking ID
  const report = reports.find((report) => report.id === trackingId)

  // If no report is found, return a 404 response
  if (!report) {
    return c.json({ error: "Report not found" }, 404)
  }

  // Return the report status and basic information
  // Note: In a real app, you would need to verify the user's identity before returning sensitive information
  return c.json({
    trackingId: report.id,
    status: report.status,
    submissionDate: report.submissionDate,
    // Only return minimal information for security
    reportType: report.reportType,
    incidentType: report.incidentType,
  })
})

export default report
