import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { SigninReqEntity, SigninResEntity, SignupReqEntity, SignupResEntity } from "./entities";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Cria usuário, base para criar o token de acesso' })
  @ApiBody({ type: SignupReqEntity })
  @ApiResponse({ status: 201, description: 'OK', type: SignupResEntity })
  @ApiResponse({ status: 403, description: 'Email already taken.' })
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto)
  }
    
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Gera token de acesso' })
  @ApiBody({ type: SigninReqEntity })
  @ApiResponse({ status: 200, description: 'OK', type: SigninResEntity })
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto)
  }
}