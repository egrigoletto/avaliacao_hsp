/*
  Warnings:

  - Added the required column `batch` to the `MedicalSupplyStorage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MedicalSupplyStorage" ADD COLUMN     "batch" TEXT NOT NULL,
ADD COLUMN     "informations" TEXT;
