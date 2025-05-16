import { Hono } from 'hono';
import { LAWYERS } from '../../data/config.js';

const app = new Hono();

interface Lawyer {
  id: number;
  name: string;
  photo: string;
  location: string;
  specializations: string[];
  rating: number;
  reviews: number;
  barNumber: string;
  experience: number;
  languages: string[];
  availability: string;
  successRate: string;
  bio: string;
  caseCount: number;
  education: string;
  contactHours: string;
  testimonials: { text: string; author: string }[];
  expertise: string[];
  documents: { name: string; type: string; description: string }[];
  availabilityCalendar: { date: string; slots: string[] }[];
}

app.get('/', (c) => {
  // Get search parameters from the URL
  const searchTerm = c.req.query('search') || '';
  const location = c.req.query('location') || '';
  const specialization = c.req.query('specialization') || '';
  const language = c.req.query('language') || '';
  const minExperience = Number(c.req.query('minExperience') || 0);

  // Filter lawyers based on search criteria
  let filteredLawyers: Lawyer[] = LAWYERS;

  // Filter by search term (name, specialization, or location)
  if (searchTerm) {
    filteredLawyers = filteredLawyers.filter(
      (lawyer: Lawyer) =>
        lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lawyer.specializations.some((spec: string) => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
        lawyer.location.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  // Filter by location
  if (location) {
    filteredLawyers = filteredLawyers.filter((lawyer: Lawyer) => lawyer.location === location);
  }

  // Filter by specialization
  if (specialization) {
    filteredLawyers = filteredLawyers.filter((lawyer: Lawyer) => lawyer.specializations.includes(specialization));
  }

  // Filter by language
  if (language) {
    filteredLawyers = filteredLawyers.filter((lawyer: Lawyer) => lawyer.languages.includes(language));
  }

  // Filter by minimum experience
  if (minExperience > 0) {
    filteredLawyers = filteredLawyers.filter((lawyer: Lawyer) => lawyer.experience >= minExperience);
  }

  // Return the filtered lawyers
  return c.json({ lawyers: filteredLawyers });
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
