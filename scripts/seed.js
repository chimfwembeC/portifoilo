// ./scripts/seed.js
require('dotenv').config();

// Your seeding logic here
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
        },
    });
    // Add more seeding data as needed
}

main()
    .then(() => {
        console.log('Seeding completed.');
    })
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
