/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[batch]` on the table `MedicalSupplyStorage` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[medicalSupllyId]` on the table `MedicalSupplyStorage` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `medicalGroupId` to the `MedicalSupply` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicalSupllyId` to the `MedicalSupplyStorage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MedicalSupply" ADD COLUMN     "medicalGroupId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MedicalSupplyStorage" ADD COLUMN     "medicalSupllyId" TEXT NOT NULL,
ALTER COLUMN "quantity" SET DEFAULT 1;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MedicalSupplyStorage_batch_key" ON "MedicalSupplyStorage"("batch");

-- CreateIndex
CREATE UNIQUE INDEX "MedicalSupplyStorage_medicalSupllyId_key" ON "MedicalSupplyStorage"("medicalSupllyId");

-- AddForeignKey
ALTER TABLE "MedicalSupply" ADD CONSTRAINT "MedicalSupply_medicalGroupId_fkey" FOREIGN KEY ("medicalGroupId") REFERENCES "MedicalSupplyGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
