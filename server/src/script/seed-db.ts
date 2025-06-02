// scripts/seed-db.ts
import { seedAdminUsers, seedLawyers, seedCases, seedReports, seedEmergencyContacts, seedResources } from '@/db/seed.js'; // Import seed functions
import prisma from '@/db/client.js'; // Import your Prisma client

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
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });