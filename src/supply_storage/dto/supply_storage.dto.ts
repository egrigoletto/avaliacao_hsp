import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
export class CreateMedicalSupplyStorageDto {
  @IsNotEmpty()
  @IsString()
  batch: string

  @IsOptional()
  @IsNumber()
  quantity: number

  @IsOptional()
  @IsString()
  informations: string

  @IsNotEmpty()
  @IsString()
  medicalSupllyId: string
}

export class UpdateMedicalSupplyStorageDto {
  @IsOptional()
  @IsString()
  batch: string

  @IsOptional()
  @IsNumber()
  quantity: number

  @IsOptional()
  @IsString()
  informations: string

  @IsOptional()
  @IsString()
  medicalSupllyId: string
}
