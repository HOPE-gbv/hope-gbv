// seed.ts
import {
    LAWYERS,
    CASES,
    REPORTS,
    EMERGENCY_CONTACTS,
    ADMIN_USERS,
    RESOURCES,
} from '../data/config.js'; // Assuming this path is correct relative to seed.ts
import prisma from './client.js';   // Assuming this path is correct relative to seed.ts
import { hash } from 'bcrypt';

// Add 'export' keyword here
export async function seedAdminUsers() {
  console.log('Seeding Admin Users...');
  for (const adminUser of ADMIN_USERS) {
    const hashedPassword = await hash(adminUser.password, 10);
    await prisma.adminUser.upsert({
      where: { email: adminUser.email },
      update: { password: hashedPassword, name: adminUser.name, role: adminUser.role },
      create: {
        // id: adminUser.id, // Let Prisma auto-generate ID if it's an autoincrement serial
        email: adminUser.email,
        password: hashedPassword,
        role: adminUser.role,
        name: adminUser.name,
      },
    });
  }
  console.log('Admin Users seeded.');
}

// Add 'export' keyword here
export async function seedLawyers() {
  console.log('Seeding Lawyers...');
  for (const lawyerData of LAWYERS) {
    const { testimonials, expertise, documents, availabilityCalendar, ...rest } = lawyerData;
    const lawyer = await prisma.lawyer.upsert({
      where: { barNumber: rest.barNumber },
      update: {
        ...rest,
        specializations: rest.specializations, // Prisma expects JSON-compatible types
        languages: rest.languages,             // Prisma expects JSON-compatible types
      },
      create: {
        ...rest,
        specializations: rest.specializations,
        languages: rest.languages,
      },
    });

    if (testimonials && testimonials.length > 0) {
      await prisma.lawyerTestimonial.createMany({
        data: testimonials.map(t => ({ ...t, lawyerId: lawyer.id })),
        skipDuplicates: true,
      });
    }
    if (expertise && expertise.length > 0) {
      await prisma.lawyerExpertise.createMany({
        // Ensure 'expertise' here matches the field name in your LawyerExpertise model
        data: expertise.map(e => ({ expertise: e, lawyerId: lawyer.id })), // Corrected: assuming 'e' is the string for expertise
        skipDuplicates: true,
      });
    }
    if (documents && documents.length > 0) {
      await prisma.lawyerDocument.createMany({
        data: documents.map(d => ({ ...d, lawyerId: lawyer.id })),
        skipDuplicates: true,
      });
    }
    if (availabilityCalendar && availabilityCalendar.length > 0) {
      await prisma.lawyerAvailability.createMany({
        data: availabilityCalendar.map(a => ({
          date: new Date(a.date),
          slots: a.slots, // Prisma expects JSON-compatible types
          lawyerId: lawyer.id,
        })),
        skipDuplicates: true,
      });
    }
  }
  console.log('Lawyers seeded.');
}

// Add 'export' keyword here
export async function seedCases() {
  console.log('Seeding Cases...');
  for (const caseData of CASES) {
    const { notes, actions, ...rest } = caseData;
    const caseRecord = await prisma.case.upsert({
      where: { id: rest.id },
      update: {
        ...rest,
        reportDate: new Date(rest.reportDate),
        lastUpdated: new Date(rest.lastUpdated),
      },
      create: {
        ...rest,
        reportDate: new Date(rest.reportDate),
        lastUpdated: new Date(rest.lastUpdated),
      },
    });

    if (notes && notes.length > 0) {
      await prisma.caseNote.createMany({
        data: notes.map(n => ({ ...n, date: new Date(n.date), caseId: caseRecord.id })),
        skipDuplicates: true,
      });
    }
    if (actions && actions.length > 0) {
      await prisma.caseAction.createMany({
        data: actions.map(a => ({ ...a, dueDate: new Date(a.dueDate), caseId: caseRecord.id })),
        skipDuplicates: true,
      });
    }
  }
  console.log('Cases seeded.');
}

// Add 'export' keyword here
export async function seedReports() {
  console.log('Seeding Reports...');
  for (const reportData of REPORTS) {
    await prisma.report.upsert({
      where: { id: reportData.id },
      update: { ...reportData, reportDate: new Date(reportData.reportDate) },
      create: {
        ...reportData,
        reportDate: new Date(reportData.reportDate),
      },
    });
  }
  console.log('Reports seeded.');
}

// Add 'export' keyword here
export async function seedEmergencyContacts() {
  console.log('Seeding Emergency Contacts...');
  const contactsToSeed = [];
  for (const category of Object.keys(EMERGENCY_CONTACTS as any)) {
    if (category === 'stateContacts') {
      for (const region of Object.keys((EMERGENCY_CONTACTS as any)[category])) {
        for (const contact of (EMERGENCY_CONTACTS as any)[category][region]) {
          contactsToSeed.push({ ...contact, region, category }); // Add category here as well
        }
      }
    } else {
      for (const contact of (EMERGENCY_CONTACTS as any)[category]) {
        contactsToSeed.push({ ...contact, region: null, category }); // Add category here
      }
    }
  }

  // Since EmergencyContact ID is autoincrement, we should not provide it during creation
  // if it's already present in your data and you want Prisma to handle it.
  // If your data.ts has 'id' for emergency contacts, you might need to omit it here
  // or ensure your upsert logic handles it if you were using upsert.
  // For createMany, it's simpler to just provide the data fields.
  await prisma.emergencyContact.createMany({
    data: contactsToSeed.map(({ id, ...rest }) => rest), // Exclude 'id' if it's meant to be auto-generated
    skipDuplicates: true, // This might need a unique constraint to work as expected for "duplicates"
  });
  console.log('Emergency Contacts seeded.');
}

// Add 'export' keyword here
export async function seedResources() {
  console.log('Seeding Resources...');
  const resourcesToSeed = [];
  for (const category of Object.keys(RESOURCES as any)) {
    for (const resource of (RESOURCES as any)[category]) {
      resourcesToSeed.push(resource);
    }
  }

  await prisma.resource.createMany({
    data: resourcesToSeed.map(({ id, ...rest }) => rest), // Exclude 'id' if it's auto-generated
    skipDuplicates: true,
  });
  console.log('Resources seeded.');
}

// The main execution block should ideally be in scripts/seed-db.ts
// but if you want to be able to run seed.ts directly for some reason,
// you could keep it, though it's cleaner to have a dedicated runner.
/*
async function main() {
  console.log('Starting database seeding...');
  try {
    await seedAdminUsers();
    await seedLawyers();
    await seedCases();
    await seedReports();
    await seedEmergencyContacts();
    await seedResources();
    console.log('Database seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
*/