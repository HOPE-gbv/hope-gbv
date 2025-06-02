import { Hono, type Context } from 'hono'
import prisma from '../../db/client' // Assuming default export

const resourceRoutes = new Hono() // Renamed to avoid conflict

// POST / - Create a new resource
resourceRoutes.post('/', async (c: Context) => {
  try {
    const { title, type, category, fileUrl, description, pages } = await c.req.json()

    // Validate required fields
    if (!title || !type || !category || !fileUrl) {
      return c.json({ error: 'Missing required fields: title, type, category, fileUrl' }, 400)
    }
    if (pages !== undefined && (typeof pages !== 'number' || !Number.isInteger(pages))) {
        return c.json({ error: 'Invalid type for pages, must be an integer.' }, 400);
    }


    const newResource = await prisma.resource.create({
      data: {
        title,
        type,
        category,
        fileUrl,
        description,
        pages,
      },
    })
    return c.json(newResource, 201)
  } catch (error: any) {
    console.error("Error creating resource:", error)
    return c.json({ error: "Failed to create resource", details: error.message }, 500)
  }
})

// GET / - Retrieve all resources with optional filtering
resourceRoutes.get('/', async (c: Context) => {
  try {
    const { category, type } = c.req.query()
    const whereClause: any = {}

    if (category) {
      whereClause.category = category
    }
    if (type) {
      whereClause.type = type
    }

    const resources = await prisma.resource.findMany({
      where: whereClause,
    })
    return c.json(resources)
  } catch (error: any) {
    console.error("Error retrieving resources:", error)
    return c.json({ error: "Failed to retrieve resources", details: error.message }, 500)
  }
})

// GET /:id - Retrieve a specific resource by ID
resourceRoutes.get('/:id', async (c: Context) => {
  try {
    const id = parseInt(c.req.param('id'), 10)
    if (isNaN(id)) {
      return c.json({ error: 'Invalid ID format. ID must be an integer.' }, 400)
    }

    const resource = await prisma.resource.findUnique({
      where: { id },
    })

    if (!resource) {
      return c.json({ error: 'Resource not found' }, 404)
    }
    return c.json(resource)
  } catch (error: any) {
    console.error(`Error retrieving resource ${c.req.param("id")}:`, error)
    return c.json({ error: "Failed to retrieve resource", details: error.message }, 500)
  }
})

// PUT /:id - Update an existing resource by ID
resourceRoutes.put('/:id', async (c: Context) => {
  try {
    const id = parseInt(c.req.param('id'), 10)
    if (isNaN(id)) {
      return c.json({ error: 'Invalid ID format. ID must be an integer.' }, 400)
    }

    const { title, type, category, fileUrl, description, pages } = await c.req.json()

    if (!title || !type || !category || !fileUrl) {
      return c.json({ error: 'Missing required fields for update: title, type, category, fileUrl' }, 400)
    }
    if (pages !== undefined && (pages !== null && (typeof pages !== 'number' || !Number.isInteger(pages)))) {
        return c.json({ error: 'Invalid type for pages, must be an integer or null.' }, 400);
    }

    const updatedResource = await prisma.resource.update({
      where: { id },
      data: {
        title,
        type,
        category,
        fileUrl,
        description,
        pages,
      },
    })
    return c.json(updatedResource)
  } catch (error: any) {
    console.error(`Error updating resource ${c.req.param("id")}:`, error)
    if (error.code === 'P2025') { // Prisma error code for record not found
      return c.json({ error: 'Resource not found for update' }, 404)
    }
    return c.json({ error: "Failed to update resource", details: error.message }, 500)
  }
})

// PATCH /:id - Partially update an existing resource by ID
resourceRoutes.patch('/:id', async (c: Context) => {
  try {
    const id = parseInt(c.req.param('id'), 10)
    if (isNaN(id)) {
      return c.json({ error: 'Invalid ID format. ID must be an integer.' }, 400)
    }

    const dataToUpdate = await c.req.json()
    Object.keys(dataToUpdate).forEach(key => dataToUpdate[key] === undefined && delete dataToUpdate[key]);

    if (Object.keys(dataToUpdate).length === 0) {
        return c.json({ error: 'No fields provided for update' }, 400)
    }
    
    if (dataToUpdate.pages !== undefined && (dataToUpdate.pages !== null && (typeof dataToUpdate.pages !== 'number' || !Number.isInteger(dataToUpdate.pages)))) {
        return c.json({ error: 'Invalid type for pages, must be an integer or null.' }, 400);
    }


    const updatedResource = await prisma.resource.update({
      where: { id },
      data: dataToUpdate,
    })
    return c.json(updatedResource)
  } catch (error: any) {
    console.error(`Error partially updating resource ${c.req.param("id")}:`, error)
    if (error.code === 'P2025') { // Prisma error code for record not found
      return c.json({ error: 'Resource not found for update' }, 404)
    }
    return c.json({ error: "Failed to partially update resource", details: error.message }, 500)
  }
})

// DELETE /:id - Delete a resource by ID
resourceRoutes.delete('/:id', async (c: Context) => {
  try {
    const id = parseInt(c.req.param('id'), 10)
    if (isNaN(id)) {
      return c.json({ error: 'Invalid ID format. ID must be an integer.' }, 400)
    }

    await prisma.resource.delete({
      where: { id },
    })
    return c.body(null, 204) 
  } catch (error: any) {
    console.error(`Error deleting resource ${c.req.param("id")}:`, error)
    if (error.code === 'P2025') { // Prisma error code for record not found
      return c.json({ error: 'Resource not found for deletion' }, 404)
    }
    return c.json({ error: "Failed to delete resource", details: error.message }, 500)
  }
})

export default resourceRoutes
