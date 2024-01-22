import { Module } from '@nestjs/common';
import { MedicalSupplyGroupController } from './medical_supply_group.controller';
import { MedicalSupplyGroupService } from './medical_supply_group.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MedicalSupplyGroupController],
  providers: [MedicalSupplyGroupService],
})
export class MedicalSupplyGroupModule {}
