import { type PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { type Seeder } from '../../src/types/seeder.type';
import admins from '../../data/admins.json'

class SuperAdminSeeder implements Seeder {
  isExecutable: boolean = true;

  async seed(prisma: PrismaClient): Promise<void> {
    try {
      await Promise.all(
        admins.map(async (admin) => {
          const password = await bcrypt.hash(admin.password, 10);
          return await prisma.user.create({
            data: {
              email: admin.email,
              username: admin.username,
              password,
              role: "admin",
            },
            select: {
              id: true,
              username: true,
              email: true,
              password: true,
              createdAt: true,
              role: true,
              updatedAt: true,
            },
          });
        })
      );
    } catch (error) {
      console.log({ error });
      throw new Error("Admin Creations failed!");
    }
  }
}
export default SuperAdminSeeder;