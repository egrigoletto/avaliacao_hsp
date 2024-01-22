import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateMedicalSupplyGroupDto {  
  @IsNotEmpty()
  @IsString()
  name: string
}

export class UpdateMedicalSupplyGroupDto {  
  @IsOptional()
  @IsString()
  name: string
}