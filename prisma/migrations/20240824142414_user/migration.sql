/*
  Warnings:

  - You are about to drop the column `is_email_verified` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "is_email_verified";
