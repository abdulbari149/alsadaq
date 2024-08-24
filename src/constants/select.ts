import { Prisma } from "@prisma/client";

export const userSelect: Prisma.UserSelect = {
  id: true,
  email: true,
  username: true,
  role: true,
  createdAt: true,
}