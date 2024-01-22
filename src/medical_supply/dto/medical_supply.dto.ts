import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateMedicalSupplyDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  brand: string

  @IsOptional()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  medicalGroupId: string
}

export class UpdateMedicalSupplyDto {
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  brand: string

  @IsOptional()
  @IsString()
  description: string

  @IsOptional()
  @IsString()
  medicalGroupId: string
}