import {
  LAWYERS,
  CASES,
  REPORTS,
  EMERGENCY_CONTACTS,
  ADMIN_USERS,
  RESOURCES
} from '../data/config.js';
import prisma from './client.js';
import { hash } from 'bcrypt'; 

async function seedAdminUsers() {
  console.log('Seeding Admin Users...');
  for (const adminUser of ADMIN_USERS) {
    const hashedPassword = await hash(adminUser.password, 10); // Hash password
    await prisma.adminUser.upsert({
      where: { email: adminUser.email },
      update: { password: hashedPassword, name: adminUser.name, role: adminUser.role },
      create: {
        id: adminUser.id, // Assuming IDs are unique and can be set
        email: adminUser.email,
        password: hashedPassword,
        role: adminUser.role,
        name: adminUser.name,
      },
    });
  }
  console.log('Admin Users seeded.');
}

async function seedLawyers() {
  console.log('Seeding Lawyers...');
  for (const lawyerData of LAWYERS) {
    const { testimonials, expertise, documents, availabilityCalendar, ...rest } = lawyerData;
    const lawyer = await prisma.lawyer.upsert({
      where: { barNumber: rest.barNumber },
      update: { ...(rest as any), specializations: rest.specializations as any, languages: rest.languages as any },
      create: {
        ...(rest as any),
        specializations: rest.specializations as any,
        languages: rest.languages as any,
      },
    });

    // Seed nested data
    if (testimonials && testimonials.length > 0) {
      await prisma.lawyerTestimonial.createMany({
        data: testimonials.map(t => ({ ...t, lawyerId: lawyer.id })),
        skipDuplicates: true,
      });
    }
    if (expertise && expertise.length > 0) {
      await prisma.lawyerExpertise.createMany({
        data: expertise.map((e: any) => ({ ...e, lawyerId: lawyer.id })),
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
          ...a,
          date: new Date(a.date), // Convert date string to Date object
          slots: a.slots as any, // Cast to any for JSON type
          lawyerId: lawyer.id
        })),
        skipDuplicates: true,
      });
    }
  }
  console.log('Lawyers seeded.');
}

async function seedCases() {
  console.log('Seeding Cases...');
  for (const caseData of CASES) {
    const { notes, actions, ...rest } = caseData;
    const caseRecord = await prisma.case.upsert({
      where: { id: rest.id },
      update: { ...rest, reportDate: new Date(rest.reportDate), lastUpdated: new Date(rest.lastUpdated) },
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

async function seedReports() {
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

async function seedEmergencyContacts() {
  console.log('Seeding Emergency Contacts...');
  const contactsToSeed = [];
  for (const category of Object.keys(EMERGENCY_CONTACTS as any)) { // Type assertion
    if (category === 'stateContacts') {
      for (const region of Object.keys((EMERGENCY_CONTACTS as any)[category])) { // Type assertion
        for (const contact of (EMERGENCY_CONTACTS as any)[category][region]) { // Type assertion
          contactsToSeed.push({ ...contact, region });
        }
      }
    } else {
      for (const contact of (EMERGENCY_CONTACTS as any)[category]) { // Type assertion
        contactsToSeed.push({ ...contact, region: null }); // No specific region for national/GBV/mental health
      }
    }
  }

  await prisma.emergencyContact.createMany({
    data: contactsToSeed,
    skipDuplicates: true,
  });
  console.log('Emergency Contacts seeded.');
}

async function seedResources() {
  console.log('Seeding Resources...');
  const resourcesToSeed = [];
  for (const category of Object.keys(RESOURCES as any)) { // Type assertion
    for (const resource of (RESOURCES as any)[category]) { // Type assertion
      resourcesToSeed.push(resource);
    }
  }

  await prisma.resource.createMany({
    data: resourcesToSeed,
    skipDuplicates: true,
  });
  console.log('Resources seeded.');
}


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
