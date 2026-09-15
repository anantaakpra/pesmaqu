import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const defaultPassword = 'admin123';
  const hashedPassword = await bcrypt.hash(defaultPassword, 10);

  await prisma.user.upsert({
    where: { email: 'admin@pesmaqu.com' },
    update: {
      password: hashedPassword,
    },
    create: {
      name: 'Admin PesMaQu',
      email: 'admin@pesmaqu.com',
      password: hashedPassword,
    },
  });

  console.log('Admin password updated successfully to: admin123');
}

main()
  .catch((e) => console.error('Error:', e))
  .finally(() => prisma.$disconnect());
