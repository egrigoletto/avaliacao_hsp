/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `MedicalSupplyGroup` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MedicalSupplyGroup_name_key" ON "MedicalSupplyGroup"("name");

-- AddForeignKey
ALTER TABLE "MedicalSupplyStorage" ADD CONSTRAINT "MedicalSupplyStorage_medicalSupllyId_fkey" FOREIGN KEY ("medicalSupllyId") REFERENCES "MedicalSupply"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
