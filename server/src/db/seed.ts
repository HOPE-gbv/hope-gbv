// seed.ts
import {
    LAWYERS,
    CASES,
    REPORTS,
    EMERGENCY_CONTACTS,
    ADMIN_USERS,
    RESOURCES,
} from '../data/config'; // Use .ts extension
import prisma from './client';   // Use .ts extension
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
  try {
    // Clear existing data
    await prisma.emergencyContact.deleteMany({});
    console.log('Cleared existing emergency contacts.');

    const contactsToSeed: { name: string; number: string; category: string; region?: string | null }[] = [];
    
    // Type assertion for EMERGENCY_CONTACTS
    const emergencyContactsData = EMERGENCY_CONTACTS as {
      national: Array<{ id: number; name: string; number: string; category: string }>;
      gbvHotlines: Array<{ id: number; name: string; number: string; category: string }>;
      stateContacts: { [key: string]: Array<{ id: number; name: string; number: string; category: string }> };
      mentalHealth: Array<{ id: number; name: string; number: string; category: string }>;
    };

    // Process national contacts
    emergencyContactsData.national.forEach(contact => {
      contactsToSeed.push({ name: contact.name, number: contact.number, category: contact.category, region: null });
    });

    // Process GBV hotlines
    emergencyContactsData.gbvHotlines.forEach(contact => {
      contactsToSeed.push({ name: contact.name, number: contact.number, category: contact.category, region: null });
    });

    // Process state contacts
    for (const region of Object.keys(emergencyContactsData.stateContacts)) {
      emergencyContactsData.stateContacts[region].forEach(contact => {
        contactsToSeed.push({ name: contact.name, number: contact.number, category: contact.category, region: region });
      });
    }

    // Process mental health contacts
    emergencyContactsData.mentalHealth.forEach(contact => {
      contactsToSeed.push({ name: contact.name, number: contact.number, category: contact.category, region: null });
    });
    
    if (contactsToSeed.length > 0) {
      await prisma.emergencyContact.createMany({
        data: contactsToSeed, // ID is auto-generated, so no need to map and exclude
        skipDuplicates: true, // Keeps existing behavior, though deleteMany should handle clean slate
      });
      console.log(`Successfully seeded ${contactsToSeed.length} emergency contacts.`);
    } else {
      console.log('No emergency contacts found to seed.');
    }

  } catch (error) {
    console.error('Error seeding emergency contacts:', error);
    // Optionally rethrow or handle as needed for your seeding script's overall flow
    // process.exit(1); 
  }
}

// Add 'export' keyword here
export async function seedResources() {
  console.log('Seeding Resources...');
  try {
    // Clear existing data
    await prisma.resource.deleteMany({});
    console.log('Cleared existing resources.');

    const resourcesToSeed: { title: string; type: string; category: string; description?: string | null; fileUrl: string; pages?: number | null; }[] = [];
    
    // Type assertion for RESOURCES structure
    const resourcesData = RESOURCES as {
      [key: string]: Array<{
        id: number; // Will be omitted
        title: string;
        type: string;
        category: string; // This is the actual category string like "Safety Planning"
        description?: string;
        fileUrl: string;
        pages?: number;
      }>;
    };

    for (const key of Object.keys(resourcesData)) { // key is 'safetyPlanning', 'legalResources', etc.
      resourcesData[key].forEach(resource => {
        // The 'resource' object already has the correct 'category' field.
        // We just need to omit 'id'.
        const { id, ...restOfResource } = resource;
        resourcesToSeed.push(restOfResource);
      });
    }
    
    if (resourcesToSeed.length > 0) {
      await prisma.resource.createMany({
        data: resourcesToSeed,
        skipDuplicates: true, // Good to keep, though deleteMany should ensure clean slate
      });
      console.log(`Successfully seeded ${resourcesToSeed.length} resources.`);
    } else {
      console.log('No resources found to seed.');
    }

  } catch (error) {
    console.error('Error seeding resources:', error);
    // process.exit(1); // Optionally exit if critical
  }
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