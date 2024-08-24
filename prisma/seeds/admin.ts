import { type PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { type Seeder } from "../../src/types/seeder.type";
import admins from "../../data/admins.json" with { type: "json" };

class SuperAdminSeeder implements Seeder {
  isExecutable: boolean = true;

  async seed(prisma: PrismaClient): Promise<void> {
    try {
      await Promise.all(
        admins.map(async (admin) => {
          const password = await bcrypt.hash(admin.password, 10);
          const user = await prisma.user.findFirst({
            where: { email: admin.email },
          });

          if (user) {
            await prisma.user.update({
              where: { id: user.id },
              data: { role: "admin", password, username: admin.username },
            });
            return;
          }

          await prisma.user.create({
            data: {
              email: admin.email,
              username: admin.username,
              password,
              role: "admin",
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
