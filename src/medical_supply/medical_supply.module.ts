import { Module } from '@nestjs/common';
import { MedicalSupplyController } from './medical_supply.controller';
import { MedicalSupplyService } from './medical_supply.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MedicalSupplyController],
  providers: [MedicalSupplyService],
})
export class MedicalSupplyModule {}
