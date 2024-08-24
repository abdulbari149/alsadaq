import { type PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { type Seeder } from "../../src/types/seeder.type";
import admins from "../../data/admins.json" with { type: "json" };
import { supabase } from "@/lib/supabase";


class SuperAdminSeeder implements Seeder {
  isExecutable: boolean = true;

  private async fetchAdmins() {

    const { data } = await supabase.storage.from('data').download('admins.json')

    const bufferData = await data?.arrayBuffer()
    if (!bufferData) {
      throw new Error('Invalid buffer data');
    };
    const values = Buffer.from(bufferData).toString('utf-8')
    const admins = JSON.parse(values);

    return admins;
  }

  async seed(prisma: PrismaClient): Promise<void> {

    try {
      const admins = await this.fetchAdmins();
      await Promise.all(
        admins.map(async (admin: { email: string, username: string, password: string }) => {
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
