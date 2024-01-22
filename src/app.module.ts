import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MedicalSupplyModule } from './medical_supply/medical_supply.module';
import { SupplyStorageModule } from './supply_storage/supply_storage.module';
import { MedicalSupplyGroupModule } from './medical_supply_group/medical_supply_group.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule, 
    MedicalSupplyModule, 
    SupplyStorageModule, 
    MedicalSupplyGroupModule, 
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
