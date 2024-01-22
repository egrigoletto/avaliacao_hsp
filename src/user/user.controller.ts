import {
  Controller,
  Get,
  Req,
  UseGuards
} from '@nestjs/common'
import { Request } from 'express'
import { userService } from './user.service'
import { JwtGuard } from 'src/auth/guard'
import { userGetDataResEntity } from './entities'
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: userService) { }

  
  @ApiOperation({ summary: 'Recupera dados do usuário' })
  @ApiResponse({ status: 200, description: 'OK', type: userGetDataResEntity })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Get('get-data')
  getUser(@Req() req: Request) {
    const userData = this.userService.getUser(req.user['sub'])
    return userData
  }
}
