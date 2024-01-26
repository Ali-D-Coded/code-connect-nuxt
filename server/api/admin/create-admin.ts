import { PrismaClient } from '@prisma/client'
import { ACCOUNT_TYPE,ACCOUNT_STATUS } from '@prisma/client';
const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  console.log({event});
   const data = {
        firstName: 'admin',
        lastName: 'admin',
        userName: 'admin',
        phone: '1234567890',
        email: 'admin@example.com',
        password: '123456789',
        status: ACCOUNT_STATUS.ACTIVE,
        accountType: ACCOUNT_TYPE.ADMIN,
      };
  return await prisma.user.create({
        data: data
      });
 
})