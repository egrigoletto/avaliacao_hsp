-- DropIndex
DROP INDEX "MedicalSupplyStorage_medicalSupllyId_key";

-- AlterTable
ALTER TABLE "MedicalSupply" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "MedicalSupplyGroup" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "MedicalSupplyStorage" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
