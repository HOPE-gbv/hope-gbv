import { Hono } from 'hono';
import db from '@db/client.js'; // Import Prisma client
const AdminLawyers = new Hono();
// Helper function to convert JSON fields for client
const serializeLawyerJson = (lawyer) => {
    if (lawyer.specializations) {
        lawyer.specializations = JSON.parse(lawyer.specializations);
    }
    if (lawyer.languages) {
        lawyer.languages = JSON.parse(lawyer.languages);
    }
    if (lawyer.availabilityCal) {
        lawyer.availabilityCal = lawyer.availabilityCal.map((avail) => ({
            ...avail,
            slots: JSON.parse(avail.slots),
            date: avail.date.toISOString(), // Assuming date is also a DateTime
        }));
    }
    return lawyer;
};
// Helper function to convert client JSON fields for Prisma
const deserializeLawyerJson = (lawyerData) => {
    if (lawyerData.specializations) {
        lawyerData.specializations = JSON.stringify(lawyerData.specializations);
    }
    if (lawyerData.languages) {
        lawyerData.languages = JSON.stringify(lawyerData.languages);
    }
    if (lawyerData.availabilityCal) {
        lawyerData.availabilityCal = lawyerData.availabilityCal.map((avail) => ({
            ...avail,
            slots: JSON.stringify(avail.slots),
            date: new Date(avail.date),
        }));
    }
    return lawyerData;
};
AdminLawyers.get('/api/admin/lawyers', async (c) => {
    try {
        const { verified, active, location, specialization } = c.req.query();
        const where = {};
        if (verified !== undefined)
            where.verified = verified === "true";
        if (active !== undefined)
            where.active = active === "true";
        if (location)
            where.location = location;
        if (specialization) {
            where.specializations = {
                contains: JSON.stringify(specialization), // Search within JSON array
            };
        }
        const lawyers = await db.lawyer.findMany({
            where,
            include: {
                testimonials: true,
                expertise: true,
                documents: true,
                availabilityCal: true,
            },
        });
        const serializedLawyers = lawyers.map(serializeLawyerJson);
        return c.json({ lawyers: serializedLawyers });
    }
    catch (error) {
        console.error("Error fetching lawyers:", error);
        return c.json({ error: "Failed to fetch lawyers" }, 500);
    }
});
AdminLawyers.get('/api/admin/lawyers/:id', async (c) => {
    try {
        const id = Number(c.req.param("id"));
        const lawyer = await db.lawyer.findUnique({
            where: { id: id },
            include: {
                testimonials: true,
                expertise: true,
                documents: true,
                availabilityCal: true,
            },
        });
        if (!lawyer) {
            return c.json({ error: "Lawyer not found" }, 404);
        }
        return c.json({ lawyer: serializeLawyerJson(lawyer) });
    }
    catch (error) {
        console.error(`Error fetching lawyer ${c.req.param("id")}:`, error);
        return c.json({ error: "Failed to fetch lawyer" }, 500);
    }
});
AdminLawyers.post('/api/admin/lawyers', async (c) => {
    try {
        const lawyerData = await c.req.json();
        const deserializedLawyerData = deserializeLawyerJson(lawyerData);
        // Basic validation
        if (!deserializedLawyerData.name || !deserializedLawyerData.barNumber || !deserializedLawyerData.location || !deserializedLawyerData.experience) {
            return c.json({ error: "Missing required lawyer fields" }, 400);
        }
        const newLawyer = await db.lawyer.create({
            data: {
                ...deserializedLawyerData,
                testimonials: {
                    create: deserializedLawyerData.testimonials || [],
                },
                expertise: {
                    create: deserializedLawyerData.expertise || [],
                },
                documents: {
                    create: deserializedLawyerData.documents || [],
                },
                availabilityCal: {
                    create: deserializedLawyerData.availabilityCal || [],
                },
            },
            include: {
                testimonials: true,
                expertise: true,
                documents: true,
                availabilityCal: true,
            },
        });
        return c.json({
            success: true,
            lawyer: serializeLawyerJson(newLawyer),
            message: "Lawyer profile created successfully",
        });
    }
    catch (error) {
        console.error("Error creating lawyer profile:", error);
        return c.json({ error: "Failed to create lawyer profile" }, 500);
    }
});
AdminLawyers.put('/api/admin/lawyers/:id', async (c) => {
    try {
        const id = Number(c.req.param("id"));
        const updates = await c.req.json();
        const deserializedUpdates = deserializeLawyerJson(updates);
        const existingLawyer = await db.lawyer.findUnique({
            where: { id: id },
        });
        if (!existingLawyer) {
            return c.json({ error: "Lawyer not found" }, 404);
        }
        // Handle nested updates for relations (testimonials, expertise, documents, availabilityCal)
        // This is a simplified approach; a more robust solution might involve checking for existing records
        // and performing update/delete/create operations on individual nested items.
        const updatedLawyer = await db.lawyer.update({
            where: { id: id },
            data: {
                ...deserializedUpdates,
                testimonials: {
                    deleteMany: {}, // Clear existing
                    create: deserializedUpdates.testimonials || [],
                },
                expertise: {
                    deleteMany: {}, // Clear existing
                    create: deserializedUpdates.expertise || [],
                },
                documents: {
                    deleteMany: {}, // Clear existing
                    create: deserializedUpdates.documents || [],
                },
                availabilityCal: {
                    deleteMany: {}, // Clear existing
                    create: deserializedUpdates.availabilityCal || [],
                },
            },
            include: {
                testimonials: true,
                expertise: true,
                documents: true,
                availabilityCal: true,
            },
        });
        return c.json({
            success: true,
            lawyer: serializeLawyerJson(updatedLawyer),
            message: "Lawyer profile updated successfully",
        });
    }
    catch (error) {
        console.error(`Error updating lawyer profile ${c.req.param("id")}:`, error);
        return c.json({ error: "Failed to update lawyer profile" }, 500);
    }
});
AdminLawyers.delete('/api/admin/lawyers/:id', async (c) => {
    try {
        const id = Number(c.req.param("id"));
        const deletedLawyer = await db.lawyer.delete({
            where: { id: id },
        });
        if (!deletedLawyer) {
            return c.json({ error: "Lawyer not found" }, 404);
        }
        return c.json({
            success: true,
            message: "Lawyer profile deleted successfully",
        });
    }
    catch (error) {
        console.error(`Error deleting lawyer profile ${c.req.param("id")}:`, error);
        return c.json({ error: "Failed to delete lawyer profile" }, 500);
    }
});
export default AdminLawyers;
