import { Hono, type Context } from 'hono'
import { CASES } from '../../../data/config.js'


const Admincases = new Hono()

Admincases.get('/admin/case', async (c: Context) => {
  // Get search parameters from the URL
  const status = c.req.query("status") || ""
  const severity = c.req.query("severity") || ""
  const type = c.req.query("type") || ""
  const location = c.req.query("location") || ""
  const assignedTo = c.req.query("assignedTo") || ""

  // Filter cases based on search criteria
  let filteredCases = CASES

  if (status) {
    filteredCases = filteredCases.filter((c) => c.status.toLowerCase() === status.toLowerCase())
  }

  if (severity) {
    filteredCases = filteredCases.filter((c) => c.severity.toLowerCase() === severity.toLowerCase())
  }

  if (type) {
    filteredCases = filteredCases.filter((c) => c.type.toLowerCase().includes(type.toLowerCase()))
  }

  if (location) {
    filteredCases = filteredCases.filter((c) => c.location.toLowerCase().includes(location.toLowerCase()))
  }

  if (assignedTo) {
    filteredCases = filteredCases.filter((c) => c.assignedTo === Number(assignedTo))
  }

  // Return the filtered cases
  return c.json({ cases: filteredCases })
})

Admincases.get('/admin/case/:id', async (c: Context) => {
  const caseId = c.req.param("id")

  // Find the case with the matching ID
  const caseData = CASES.find((c) => c.id === caseId)

  // If no case is found, return a 404 response
  if (!caseData) {
    return c.json({ error: "Case not found" }, 404)
  }

  // Return the case data
  return c.json({ case: caseData })
})

Admincases.post('/admin/case', async (c: Context) => {
  try {
    const caseData = await c.req.json()

    // In a real app, this would validate and save to a database
    // For this example, we'll just return a success message with a mock ID
    const newCaseId = `GBV-${Math.floor(100000 + Math.random() * 900000)}`

    return c.json({
      success: true,
      caseId: newCaseId,
      message: "Case created successfully",
    })
  } catch (error) {
    console.error("Error creating case:", error)
    return c.json({ error: "Failed to create case" }, 500)
  }
})

Admincases.patch('/admin/case/:id', async (c: Context) => {
  try {
    const caseId = c.req.param("id")
    const updates = await c.req.json()

    // Find the case with the matching ID
    const caseData = CASES.find((c) => c.id === caseId)

    // If no case is found, return a 404 response
    if (!caseData) {
      return c.json({ error: "Case not found" }, 404)
    }

    // In a real app, this would update the case in the database
    // For this example, we'll just return a success message
    return c.json({
      success: true,
      message: "Case updated successfully",
    })
  } catch (error) {
    console.error("Error updating case:", error)
    return c.json({ error: "Failed to update case" }, 500)
  }
})

Admincases.delete('/admin/case/:id', async (c: Context) => {
  const caseId = c.req.param("id")

  // Find the case with the matching ID
  const caseIndex = CASES.findIndex((c) => c.id === caseId)

  // If no case is found, return a 404 response
  if (caseIndex === -1) {
    return c.json({ error: "Case not found" }, 404)
  }

  // In a real app, this would delete or archive the case in the database
  // For this example, we'll just return a success message
  return c.json({
    success: true,
    message: "Case deleted successfully",
  })
})

export default Admincases
