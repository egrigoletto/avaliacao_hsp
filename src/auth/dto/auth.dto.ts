import { IsEmail, IsString, IsNotEmpty, IsOptional } from "class-validator"

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsString()
  @IsOptional()
  fullName: string
}