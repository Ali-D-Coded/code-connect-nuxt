import { PrismaClient, ACCOUNT_STATUS, ACCOUNT_TYPE } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const data = {
    firstName: "admin",
    lastName: "admin",
    userName: "admin",
    phone: "1234567890",
    email: "admin@example.com",
    password: "123456789",
    status: ACCOUNT_STATUS.ACTIVE,
    accountType: ACCOUNT_TYPE.ADMIN,
  };
  await prisma.user.create({
    data: data,
  });
}

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
