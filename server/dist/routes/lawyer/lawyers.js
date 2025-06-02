import { Hono } from 'hono';
import { LAWYERS } from '../../data/config.js';
import prisma from '../../db/client.js';
const app = new Hono();
app.get('/', (c) => {
    // Get search parameters from the URL
    const searchTerm = c.req.query('search') || '';
    const location = c.req.query('location') || '';
    const specialization = c.req.query('specialization') || '';
    const language = c.req.query('language') || '';
    const minExperience = Number(c.req.query('minExperience') || 0);
    // Filter lawyers based on search criteria
    let filteredLawyers = LAWYERS;
    // Filter by search term (name, specialization, or location)
    if (searchTerm) {
        filteredLawyers = filteredLawyers.filter((lawyer) => lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lawyer.specializations.some((spec) => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
            lawyer.location.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    // Filter by location
    if (location) {
        filteredLawyers = filteredLawyers.filter((lawyer) => lawyer.location === location);
    }
    // Filter by specialization
    if (specialization) {
        filteredLawyers = filteredLawyers.filter((lawyer) => lawyer.specializations.includes(specialization));
    }
    // Filter by language
    if (language) {
        filteredLawyers = filteredLawyers.filter((lawyer) => lawyer.languages.includes(language));
    }
    // Filter by minimum experience
    if (minExperience > 0) {
        filteredLawyers = filteredLawyers.filter((lawyer) => lawyer.experience >= minExperience);
    }
    // Return the filtered lawyers
    return c.json({ lawyers: filteredLawyers });
});
app.get("/api/lawyers", async (req, res) => {
    const lawyers = await prisma.lawyer.findMany();
    return req.json({ lawyers });
});
app.get('/:id', (c) => {
    const id = Number(c.req.param('id'));
    const lawyer = LAWYERS.find(lawyer => lawyer.id === id);
    if (!lawyer) {
        return c.json({ error: 'Lawyer not found' }, 404);
    }
    return c.json({ lawyer });
});
export default app;
