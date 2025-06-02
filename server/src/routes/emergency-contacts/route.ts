import { Hono, type Context } from 'hono'
import prisma from '../../db/client' // Corrected: Use default import

// const prisma = new PrismaClient() // No longer needed as prisma is imported directly
const EmergencyContacts = new Hono()

// POST / - Create a new emergency contact
EmergencyContacts.post('/', async (c: Context) => {
  try {
    const { name, number, category, region } = await c.req.json()

    if (!name || !number || !category) {
      return c.json({ error: 'Missing required fields: name, number, category' }, 400)
    }

    const newContact = await prisma.emergencyContact.create({
      data: {
        name,
        number,
        category,
        region, // Optional, can be null
      },
    })
    return c.json(newContact, 201)
  } catch (error: any) {
    console.error("Error creating emergency contact:", error)
    return c.json({ error: "Failed to create emergency contact", details: error.message }, 500)
  }
})

// GET / - Retrieve all emergency contacts with optional filtering
EmergencyContacts.get('/', async (c: Context) => {
  try {
    const { category, region } = c.req.query()
    const whereClause: any = {}

    if (category) {
      whereClause.category = category
    }
    if (region) {
      whereClause.region = region
    }

    const contacts = await prisma.emergencyContact.findMany({
      where: whereClause,
    })
    return c.json(contacts)
  } catch (error: any) {
    console.error("Error retrieving emergency contacts:", error)
    return c.json({ error: "Failed to retrieve emergency contacts", details: error.message }, 500)
  }
})

// GET /:id - Retrieve a specific emergency contact by ID
EmergencyContacts.get('/:id', async (c: Context) => {
  try {
    const id = parseInt(c.req.param('id'), 10)
    if (isNaN(id)) {
      return c.json({ error: 'Invalid ID format. ID must be an integer.' }, 400)
    }

    const contact = await prisma.emergencyContact.findUnique({
      where: { id },
    })

    if (!contact) {
      return c.json({ error: 'Emergency contact not found' }, 404)
    }
    return c.json(contact)
  } catch (error: any) {
    console.error(`Error retrieving emergency contact ${c.req.param("id")}:`, error)
    return c.json({ error: "Failed to retrieve emergency contact", details: error.message }, 500)
  }
})

// PUT /:id - Update an existing emergency contact by ID
EmergencyContacts.put('/:id', async (c: Context) => {
  try {
    const id = parseInt(c.req.param('id'), 10)
    if (isNaN(id)) {
      return c.json({ error: 'Invalid ID format. ID must be an integer.' }, 400)
    }

    const { name, number, category, region } = await c.req.json()

    if (!name || !number || !category) {
      return c.json({ error: 'Missing required fields for update: name, number, category' }, 400)
    }

    const updatedContact = await prisma.emergencyContact.update({
      where: { id },
      data: {
        name,
        number,
        category,
        region,
      },
    })
    return c.json(updatedContact)
  } catch (error: any) {
    console.error(`Error updating emergency contact ${c.req.param("id")}:`, error)
    if (error.code === 'P2025') { // Prisma error code for record not found
      return c.json({ error: 'Emergency contact not found for update' }, 404)
    }
    return c.json({ error: "Failed to update emergency contact", details: error.message }, 500)
  }
})

// PATCH /:id - Partially update an existing emergency contact by ID
EmergencyContacts.patch('/:id', async (c: Context) => {
  try {
    const id = parseInt(c.req.param('id'), 10)
    if (isNaN(id)) {
      return c.json({ error: 'Invalid ID format. ID must be an integer.' }, 400)
    }

    const dataToUpdate = await c.req.json()
    // Remove undefined fields to prevent Prisma from trying to set them to null if not provided
    Object.keys(dataToUpdate).forEach(key => dataToUpdate[key] === undefined && delete dataToUpdate[key]);


    if (Object.keys(dataToUpdate).length === 0) {
        return c.json({ error: 'No fields provided for update' }, 400)
    }

    const updatedContact = await prisma.emergencyContact.update({
      where: { id },
      data: dataToUpdate,
    })
    return c.json(updatedContact)
  } catch (error: any) {
    console.error(`Error partially updating emergency contact ${c.req.param("id")}:`, error)
    if (error.code === 'P2025') { // Prisma error code for record not found
      return c.json({ error: 'Emergency contact not found for update' }, 404)
    }
    return c.json({ error: "Failed to partially update emergency contact", details: error.message }, 500)
  }
})

// DELETE /:id - Delete an emergency contact by ID
EmergencyContacts.delete('/:id', async (c: Context) => {
  try {
    const id = parseInt(c.req.param('id'), 10)
    if (isNaN(id)) {
      return c.json({ error: 'Invalid ID format. ID must be an integer.' }, 400)
    }

    await prisma.emergencyContact.delete({
      where: { id },
    })
    return c.body(null, 204) // Or return c.json({ message: 'Emergency contact deleted successfully' })
  } catch (error: any) {
    console.error(`Error deleting emergency contact ${c.req.param("id")}:`, error)
    if (error.code === 'P2025') { // Prisma error code for record not found
      return c.json({ error: 'Emergency contact not found for deletion' }, 404)
    }
    return c.json({ error: "Failed to delete emergency contact", details: error.message }, 500)
  }
})

export default EmergencyContacts
