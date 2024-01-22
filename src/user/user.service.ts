import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class userService {
  constructor(private prisma: PrismaService,) {}
  
  public async getUser (userId): Promise<Object> {
    try {
      const user = await this.prisma.users.findFirst({
        where: {
          id: userId,
        }
      })

      delete user.hash
      
      return user 
    } catch (error) {
      throw error
    }
  }
}