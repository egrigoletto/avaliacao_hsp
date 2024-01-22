/*
  Warnings:

  - Added the required column `name` to the `MedicalSupplyGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `MedicalSupplyStorage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MedicalSupplyGroup" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MedicalSupplyStorage" ADD COLUMN     "quantity" INTEGER NOT NULL;
