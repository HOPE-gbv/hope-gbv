import { Hono } from 'hono';
import prisma from '@/db/client.js';
import { type Lawyer as PrismaLawyer } from '@prisma/client';
const app = new Hono();



app.get("/", async (req, res) => {
  const lawyers: PrismaLawyer[] = await prisma.lawyer.findMany();
  return req.json({ lawyers });
});



app.get('/:id', async  (c) => {
  const id = Number(c.req.param('id'));
  const lawyer = await prisma.lawyer.findUnique({
    where: { id: id },
    include: {
      testimonials: true,
      expertise: true,
      documents: true,
      availabilityCalendar: true,
    },
  });

  if (!lawyer) {
    return c.json({ error: 'Lawyer not found' }, 404);
  }

  return c.json({ lawyer });
});

export default app;
