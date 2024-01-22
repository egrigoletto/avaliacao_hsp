import { ForbiddenException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon2 from "argon2"
import { ConfigService } from "@nestjs/config";

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  public async signup(dto: AuthDto): Promise<Object> {
      const { password, fullName, email } = dto

      const hash = await argon2.hash(password)
      try {
        const user = await this.prisma.users.create({
          data: {
            fullName,
            email,
            hash
          },
        })
        
        delete user.hash 

        return user
      } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email already taken')
        }
      }
      throw error
    }
  }

  async signToken(userId: number, email: string): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email
    }

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '30m',
      secret: this.config.get('JWT_SECRET'),
    })

    return { access_token: token }
    
  }

  public async signin(dto: AuthDto): Promise<Object> {
    const { password, email } = dto
    const user = await this.prisma.users.findUnique({
      where: {
        email
      }
    })
    if (!user) throw new ForbiddenException('Credentials not found')

    const pwMatches = await argon2.verify(user.hash, password)

    if (!pwMatches) throw new ForbiddenException('Credentials incorrect')

    delete user.hash

    const access_token = this.signToken(user.id, user.email)
    
    return access_token
  }
}