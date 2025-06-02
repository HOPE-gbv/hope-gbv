import { Hono, type Context } from 'hono'
import { PrismaClient } from '../../db/client' // Adjusted path

const prisma = new PrismaClient()
const EmergencyCall = new Hono()

// POST / - Create a new emergency call
EmergencyCall.post('/', async (c: Context) => {
  try {
    const { emergencyType, location, phoneNumber, recordingEnabled, notes } = await c.req.json()

    if (!emergencyType || !location || !phoneNumber || typeof recordingEnabled !== 'boolean') {
      return c.json({ error: 'Missing required fields: emergencyType, location, phoneNumber, recordingEnabled (must be boolean)' }, 400)
    }

    const newCall = await prisma.emergencyCall.create({
      data: {
        emergencyType,
        location,
        phoneNumber,
        recordingEnabled,
        notes,
        // callTime is defaulted by schema
        // status is defaulted by schema
      },
    })
    return c.json(newCall, 201)
  } catch (error: any) {
    console.error("Error creating emergency call:", error)
    return c.json({ error: "Failed to create emergency call", details: error.message }, 500)
  }
})

// GET / - Retrieve all emergency calls with optional filtering
EmergencyCall.get('/', async (c: Context) => {
  try {
    const { status, emergencyType } = c.req.query()
    const whereClause: any = {}

    if (status) {
      whereClause.status = status
    }
    if (emergencyType) {
      whereClause.emergencyType = emergencyType
    }

    const calls = await prisma.emergencyCall.findMany({
      where: whereClause,
    })
    return c.json(calls)
  } catch (error: any) {
    console.error("Error retrieving emergency calls:", error)
    return c.json({ error: "Failed to retrieve emergency calls", details: error.message }, 500)
  }
})

// GET /:id - Retrieve a specific emergency call by ID
EmergencyCall.get('/:id', async (c: Context) => {
  try {
    const { id } = c.req.param()
    const call = await prisma.emergencyCall.findUnique({
      where: { id },
    })

    if (!call) {
      return c.json({ error: 'Emergency call not found' }, 404)
    }
    return c.json(call)
  } catch (error: any) {
    console.error(`Error retrieving emergency call ${c.req.param("id")}:`, error)
    if (error.code === 'P2023') { // Prisma error code for invalid UUID format for SQLite
        return c.json({ error: 'Invalid ID format. ID must be a valid UUID.' }, 400);
    }
    return c.json({ error: "Failed to retrieve emergency call", details: error.message }, 500)
  }
})

// PUT /:id - Update an existing emergency call by ID
EmergencyCall.put('/:id', async (c: Context) => {
  try {
    const { id } = c.req.param()
    const { emergencyType, location, phoneNumber, recordingEnabled, status, notes } = await c.req.json()

    if (!emergencyType || !location || !phoneNumber || typeof recordingEnabled !== 'boolean' || !status) {
      return c.json({ error: 'Missing required fields for update: emergencyType, location, phoneNumber, recordingEnabled, status' }, 400)
    }

    const updatedCall = await prisma.emergencyCall.update({
      where: { id },
      data: {
        emergencyType,
        location,
        phoneNumber,
        recordingEnabled,
        status,
        notes,
      },
    })
    return c.json(updatedCall)
  } catch (error: any) {
    console.error(`Error updating emergency call ${c.req.param("id")}:`, error)
    if (error.code === 'P2025') { // Prisma error code for record not found
      return c.json({ error: 'Emergency call not found for update' }, 404)
    }
    if (error.code === 'P2023') { 
        return c.json({ error: 'Invalid ID format. ID must be a valid UUID.' }, 400);
    }
    return c.json({ error: "Failed to update emergency call", details: error.message }, 500)
  }
})

// PATCH /:id - Partially update an existing emergency call by ID
EmergencyCall.patch('/:id', async (c: Context) => {
  try {
    const { id } = c.req.param()
    const dataToUpdate = await c.req.json()

    // Remove undefined fields to prevent Prisma from trying to set them to null
    Object.keys(dataToUpdate).forEach(key => dataToUpdate[key] === undefined && delete dataToUpdate[key])

    if (Object.keys(dataToUpdate).length === 0) {
        return c.json({ error: 'No fields provided for update' }, 400)
    }
    
    // Ensure boolean value if present
    if (dataToUpdate.recordingEnabled !== undefined && typeof dataToUpdate.recordingEnabled !== 'boolean') {
        return c.json({ error: 'Invalid type for recordingEnabled, must be boolean.' }, 400)
    }


    const updatedCall = await prisma.emergencyCall.update({
      where: { id },
      data: dataToUpdate,
    })
    return c.json(updatedCall)
  } catch (error: any) {
    console.error(`Error partially updating emergency call ${c.req.param("id")}:`, error)
    if (error.code === 'P2025') { // Prisma error code for record not found
      return c.json({ error: 'Emergency call not found for update' }, 404)
    }
    if (error.code === 'P2023') { 
        return c.json({ error: 'Invalid ID format. ID must be a valid UUID.' }, 400);
    }
    return c.json({ error: "Failed to partially update emergency call", details: error.message }, 500)
  }
})

// DELETE /:id - Delete an emergency call by ID
EmergencyCall.delete('/:id', async (c: Context) => {
  try {
    const { id } = c.req.param()
    await prisma.emergencyCall.delete({
      where: { id },
    })
    return c.body(null, 204) // Or return c.json({ message: 'Emergency call deleted successfully' })
  } catch (error: any) {
    console.error(`Error deleting emergency call ${c.req.param("id")}:`, error)
    if (error.code === 'P2025') { // Prisma error code for record not found
      return c.json({ error: 'Emergency call not found for deletion' }, 404)
    }
    if (error.code === 'P2023') { 
        return c.json({ error: 'Invalid ID format. ID must be a valid UUID.' }, 400);
    }
    return c.json({ error: "Failed to delete emergency call", details: error.message }, 500)
  }
})

export default EmergencyCall
