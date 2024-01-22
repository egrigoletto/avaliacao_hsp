import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMedicalSupplyDto, UpdateMedicalSupplyDto } from "./dto";

@Injectable()
export class MedicalSupplyService {
  constructor(private prisma: PrismaService) {}

  public async getMedicalSupply (): Promise<Object> {
    try {
      const medicalSupplyList = await this.prisma.medicalSupply.findMany({
        where: {
          isDeleted: false,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          brand: true,
          description: true,
          medicalGroupId: true
        }
      })
  
      return { medicalSupplyList }
    } catch (error) {
      throw error
    }
  }

  public async getMedicalSupplyById (medicalSupplyId: string): Promise<Object> {
    try {
      const medicalSupply = await this.prisma.medicalSupply.findUnique({
        where: {
          id: medicalSupplyId,
          isDeleted: false,
        },
        include: {
          medicalSupplyGroup: true,
        }
      })
  
      if (!medicalSupply) throw new NotFoundException('Medical supply not found')

      delete medicalSupply.medicalGroupId
      delete medicalSupply.isDeleted
      delete medicalSupply.medicalSupplyGroup.isDeleted
  
      return medicalSupply
    } catch (error) {
      throw error
    }
  }

  public async createMedicalSupply(createMedicalSupplyDto: CreateMedicalSupplyDto): Promise<Object> {
    const medicalSupplyGroup = await this.prisma.medicalSupplyGroup.findUnique({
      where: {
        id: createMedicalSupplyDto.medicalGroupId,
        isDeleted: false
      }
    })
 
    if (!medicalSupplyGroup) throw new NotFoundException('Medical supply group not found')

    try {
      const newMedicalSupply = await this.prisma.medicalSupply.create({
        data: {
          name: createMedicalSupplyDto.name,
          brand: createMedicalSupplyDto.brand,
          description: createMedicalSupplyDto.description || '',
          medicalGroupId: medicalSupplyGroup.id
        }
      })

      delete newMedicalSupply.isDeleted

      return newMedicalSupply
    
    } catch (error) {
      throw error
    }
  }

  public async deleteMedicalSupply(medicalSupplyId: string): Promise<Object> {
    const medicalSupply = await this.prisma.medicalSupply.findUnique({
      where: {
        id: medicalSupplyId,
      }
    })

    if (!medicalSupply) throw new NotFoundException('Medical supply not found')

    if (medicalSupply.isDeleted) throw new NotFoundException('Medical supply already deleted')

    await this.prisma.medicalSupply.update({
      where: {
        id: medicalSupplyId,
      },
      data: {
        isDeleted: true,
      }
    })

    return {}
  }

  public async updateMedicalSupply(medicalSupplyId: string, updateMedicalSupplyDto: any): Promise<Object> {
    const medicalSupply = await this.prisma.medicalSupply.findUnique({
      where: {
        id: medicalSupplyId,
      }
    })

    if (!medicalSupply) throw new NotFoundException('Medical supply not found')

    if (medicalSupply.isDeleted) throw new NotFoundException('Medical supply is deleted')

    if (updateMedicalSupplyDto.medicalSupplyGroupId) {
      const medicalSupplyGroup = await this.prisma.medicalSupplyGroup.findUnique({
        where: {
          id: updateMedicalSupplyDto.medicalSupplyGroupId,
          isDeleted: false
        }
      })
      if (!medicalSupplyGroup) throw new NotFoundException('Medical supply group not found')
    }

    const updatedMedicalSupply = await this.prisma.medicalSupply.update({
      where: {
        id: medicalSupplyId,
      },
      data: updateMedicalSupplyDto,
    })
    delete updatedMedicalSupply.isDeleted



    return updatedMedicalSupply
  }
}