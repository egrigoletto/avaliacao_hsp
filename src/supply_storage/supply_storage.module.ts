import { Module } from '@nestjs/common';
import { SupplyStorageController } from './supply_storage.controller';
import { SupplyStorageService } from './supply_storage.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SupplyStorageController],
  providers: [SupplyStorageService],
})
export class SupplyStorageModule {}
