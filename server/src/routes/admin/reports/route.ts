import { Hono, type Context } from 'hono'
import { REPORTS } from '../../../data/config.js'



const AdminReports = new Hono()

AdminReports.get('/admin/reports', async (c: Context) => {
  // Get search parameters from the URL
  const status = c.req.query("status") || ""
  const severity = c.req.query("severity") || ""
  const type = c.req.query("type") || ""
  const location = c.req.query("location") || ""
  const dateFrom = c.req.query("dateFrom") || ""
  const dateTo = c.req.query("dateTo") || ""

  // Filter reports based on search criteria
  let filteredReports = REPORTS

  if (status) {
    filteredReports = filteredReports.filter((r) => r.status.toLowerCase() === status.toLowerCase())
  }

  if (severity) {
    filteredReports = filteredReports.filter((r) => r.severity.toLowerCase() === severity.toLowerCase())
  }

  if (type) {
    filteredReports = filteredReports.filter((r) => r.incidentType.toLowerCase().includes(type.toLowerCase()))
  }

  if (location) {
    filteredReports = filteredReports.filter((r) => r.location.toLowerCase().includes(location.toLowerCase()))
  }

  if (dateFrom) {
    const fromDate = new Date(dateFrom)
    filteredReports = filteredReports.filter((r) => new Date(r.reportDate) >= fromDate)
  }

  if (dateTo) {
    const toDate = new Date(dateTo)
    filteredReports = filteredReports.filter((r) => new Date(r.reportDate) <= toDate)
  }

  // Return the filtered reports
  return c.json({ reports: filteredReports })
})
AdminReports.get('/admin/reports/:id', async (c: Context) => {
  const reportId = c.req.param("id")

  // Find the report with the matching ID
  const report = REPORTS.find((r) => r.id === reportId)

  // If no report is found, return a 404 response
  if (!report) {
    return c.json({ error: "Report not found" }, 404)
  }

  // Return the report data
  return c.json({ report })
})

AdminReports.patch('/admin/reports/:id', async (c: Context) => {
  try {
    const reportId = c.req.param("id")
    const updates = await c.req.json()

    // Find the report with the matching ID
    const report = REPORTS.find((r) => r.id === reportId)

    // If no report is found, return a 404 response
    if (!report) {
      return c.json({ error: "Report not found" }, 404)
    }

    // In a real app, this would update the report in the database
    // For this example, we'll just return a success message
    return c.json({
      success: true,
      message: "Report updated successfully",
    })
  } catch (error) {
    console.error("Error updating report:", error)
    return c.json({ error: "Failed to update report" }, 500)
  }
})
export default AdminReports