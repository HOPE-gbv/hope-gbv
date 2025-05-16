import { Hono,type  Context } from 'hono'
import { LAWYERS } from '../../../data/config.js'

// Mock data for lawyers - in a real app, this would come from a database


const AdminLawyers = new Hono()

AdminLawyers.get('/admin/lawyers', async (c: Context) => {
  // Get search parameters from the URL
  const verified = c.req.query("verified")
  const active = c.req.query("active")
  const location = c.req.query("location")
  const specialization = c.req.query("specialization")

  // Filter lawyers based on search criteria
  let filteredLawyers = LAWYERS

  if (verified === "true") {
    filteredLawyers = filteredLawyers.filter((lawyer) => lawyer.verified)
  }

  if (active === "true") {
    filteredLawyers = filteredLawyers.filter((lawyer) => lawyer.active)
  }

  if (location) {
    filteredLawyers = filteredLawyers.filter((lawyer) => lawyer.location === location)
  }

  if (specialization) {
    filteredLawyers = filteredLawyers.filter((lawyer) => lawyer.specializations.includes(specialization))
  }

  // Return the filtered lawyers
  return c.json({ lawyers: filteredLawyers })
})

AdminLawyers.get('/admin/lawyers/:id', async (c: Context) => {
  const id = Number(c.req.param("id"))

  // Find the lawyer with the matching ID
  const lawyer = LAWYERS.find((lawyer) => lawyer.id === id)

  // If no lawyer is found, return a 404 response
  if (!lawyer) {
    return c.json({ error: "Lawyer not found" }, 404)
  }

  // Return the lawyer data
  return c.json({ lawyer })
})

AdminLawyers.patch('/admin/lawyers/:id', async (c: Context) => {
  try {
    const id = Number(c.req.param("id"))
    const updates = await c.req.json()

    // Find the lawyer with the matching ID
    const lawyer = LAWYERS.find((lawyer) => lawyer.id === id)

    // If no lawyer is found, return a 404 response
    if (!lawyer) {
      return c.json({ error: "Lawyer not found" }, 404)
    }

    // In a real app, this would update the lawyer in the database
    // For this example, we'll just return a success message
    return c.json({
      success: true,
      message: "Lawyer profile updated successfully",
    })
  } catch (error) {
    console.error("Error updating lawyer profile:", error)
    return c.json({ error: "Failed to update lawyer profile" }, 500)
  }
})

AdminLawyers.delete('/admin/lawyers/:id', async (c: Context) => {
  const id = Number(c.req.param("id"))

  // Find the lawyer with the matching ID
  const lawyerIndex = LAWYERS.findIndex((lawyer) => lawyer.id === id)

  // If no lawyer is found, return a 404 response
  if (lawyerIndex === -1) {
    return c.json({ error: "Lawyer not found" }, 404)
  }

  // In a real app, this would delete or deactivate the lawyer in the database
  // For this example, we'll just return a success message
  return c.json({
    success: true,
    message: "Lawyer profile deleted successfully",
  })
})


AdminLawyers.post('/admin/lawyers', async (c: Context) => {
  try {
    const lawyerData = await c.req.json()

    // In a real app, this would validate and save to a database
    // For this example, we'll just return a success message with a mock ID
    const newLawyerId = LAWYERS.length + 1

    return c.json({
      success: true,
      lawyerId: newLawyerId,
      message: "Lawyer profile created successfully",
    })
  } catch (error) {
    console.error("Error creating lawyer profile:", error)
    return c.json({ error: "Failed to create lawyer profile" }, 500)
  }
})

export default AdminLawyers
