import { Hono, type Context } from 'hono'
import prisma from '@/db/client.js' // Import Prisma client

const Admincases = new Hono()

// Helper function to convert Prisma DateTime to string for client
const serializeCaseDates = (caseItem: any) => {
  if (caseItem.reportDate) {
    caseItem.reportDate = caseItem.reportDate.toISOString();
  }
  if (caseItem.lastUpdated) {
    caseItem.lastUpdated = caseItem.lastUpdated.toISOString();
  }
  if (caseItem.notes) {
    caseItem.notes = caseItem.notes.map((note: any) => ({
      ...note,
      date: note.date.toISOString(),
    }));
  }
  if (caseItem.actions) {
    caseItem.actions = caseItem.actions.map((action: any) => ({
      ...action,
      dueDate: action.dueDate.toISOString(),
    }));
  }
  return caseItem;
};

// Helper function to convert client string dates to Date objects for Prisma
const deserializeCaseDates = (caseData: any) => {
  if (caseData.reportDate) {
    caseData.reportDate = new Date(caseData.reportDate);
  }
  if (caseData.lastUpdated) {
    caseData.lastUpdated = new Date(caseData.lastUpdated);
  }
  if (caseData.notes) {
    caseData.notes = caseData.notes.map((note: any) => ({
      ...note,
      date: new Date(note.date),
    }));
  }
  if (caseData.actions) {
    caseData.actions = caseData.actions.map((action: any) => ({
      ...action,
      dueDate: new Date(action.dueDate),
    }));
  }
  return caseData;
};


Admincases.get('/admin/cases', async (c: Context) => {
  try {
    const { status, severity, type, location, assignedTo } = c.req.query()

    const where: any = {};
    if (status) where.status = status;
    if (severity) where.severity = severity;
    if (type) where.type = { contains: type, mode: 'insensitive' };
    if (location) where.location = { contains: location, mode: 'insensitive' };
    if (assignedTo) where.assignedTo = Number(assignedTo);

    const cases = await prisma.case.findMany({
      where,
      include: {
        notes: true,
        actions: true,
      },
    });

    const serializedCases = cases.map(serializeCaseDates);
    return c.json({ cases: serializedCases });
  } catch (error) {
    console.error("Error fetching cases:", error);
    return c.json({ error: "Failed to fetch cases" }, 500);
  }
});

Admincases.get('/admin/cases/:id', async (c: Context) => {
  try {
    const caseId = c.req.param("id");
    const caseData = await prisma.case.findUnique({
      where: { id: caseId },
      include: {
        notes: true,
        actions: true,
      },
    });

    if (!caseData) {
      return c.json({ error: "Case not found" }, 404);
    }

    return c.json({ case: serializeCaseDates(caseData) });
  } catch (error) {
    console.error(`Error fetching case ${c.req.param("id")}:`, error);
    return c.json({ error: "Failed to fetch case" }, 500);
  }
});

Admincases.post('/admin/cases', async (c: Context) => {
  try {
    const caseData = await c.req.json();
    const deserializedCaseData = deserializeCaseDates(caseData);

    // Basic validation (can be expanded)
    if (!deserializedCaseData.reportDate || !deserializedCaseData.status || !deserializedCaseData.type || !deserializedCaseData.location || !deserializedCaseData.clientName) {
      return c.json({ error: "Missing required case fields" }, 400);
    }

    const newCase = await prisma.case.create({
      data: {
        id: deserializedCaseData.id || `GBV-${Math.floor(100000 + Math.random() * 900000)}`, // Generate ID if not provided
        reportDate: deserializedCaseData.reportDate,
        status: deserializedCaseData.status,
        severity: deserializedCaseData.severity,
        type: deserializedCaseData.type,
        location: deserializedCaseData.location,
        assignedTo: deserializedCaseData.assignedTo,
        clientName: deserializedCaseData.clientName,
        clientContact: deserializedCaseData.clientContact,
        lastUpdated: deserializedCaseData.lastUpdated || new Date(),
        notes: {
          create: deserializedCaseData.notes?.map((note: any) => ({
            date: note.date,
            author: note.author,
            content: note.content,
          })) || [],
        },
        actions: {
          create: deserializedCaseData.actions?.map((action: any) => ({
            type: action.type,
            status: action.status,
            dueDate: action.dueDate,
            assignedTo: action.assignedTo,
          })) || [],
        },
      },
      include: {
        notes: true,
        actions: true,
      },
    });

    return c.json({
      success: true,
      case: serializeCaseDates(newCase),
      message: "Case created successfully",
    });
  } catch (error) {
    console.error("Error creating case:", error);
    return c.json({ error: "Failed to create case" }, 500);
  }
});

Admincases.put('/admin/cases/:id', async (c: Context) => {
  try {
    const caseId = c.req.param("id");
    const updates = await c.req.json();
    const deserializedUpdates = deserializeCaseDates(updates);

    const existingCase = await prisma.case.findUnique({
      where: { id: caseId },
    });

    if (!existingCase) {
      return c.json({ error: "Case not found" }, 404);
    }

    const updatedCase = await prisma.case.update({
      where: { id: caseId },
      data: {
        ...deserializedUpdates,
        lastUpdated: new Date(), // Update lastUpdated on modification
        notes: {
          // This assumes notes are sent as a complete replacement or handled separately
          // For robust handling, you might need to compare and update/create/delete individual notes
          deleteMany: {}, // Clear existing notes
          create: deserializedUpdates.notes?.map((note: any) => ({
            date: note.date,
            author: note.author,
            content: note.content,
          })) || [],
        },
        actions: {
          // Similar to notes, this assumes complete replacement
          deleteMany: {}, // Clear existing actions
          create: deserializedUpdates.actions?.map((action: any) => ({
            type: action.type,
            status: action.status,
            dueDate: action.dueDate,
            assignedTo: action.assignedTo,
          })) || [],
        },
      },
      include: {
        notes: true,
        actions: true,
      },
    });

    return c.json({
      success: true,
      case: serializeCaseDates(updatedCase),
      message: "Case updated successfully",
    });
  } catch (error) {
    console.error(`Error updating case ${c.req.param("id")}:`, error);
    return c.json({ error: "Failed to update case" }, 500);
  }
});

Admincases.delete('/admin/cases/:id', async (c: Context) => {
  try {
    const caseId = c.req.param("id");
    const deletedCase = await prisma.case.delete({
      where: { id: caseId },
    });

    if (!deletedCase) {
      return c.json({ error: "Case not found" }, 404);
    }

    return c.json({
      success: true,
      message: "Case deleted successfully",
    });
  } catch (error) {
    console.error(`Error deleting case ${c.req.param("id")}:`, error);
    return c.json({ error: "Failed to delete case" }, 500);
  }
});

export default Admincases
