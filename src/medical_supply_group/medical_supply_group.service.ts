import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMedicalSupplyGroupDto, UpdateMedicalSupplyGroupDto } from "./dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class MedicalSupplyGroupService {
  constructor(private prisma: PrismaService) {}

  public async getMedicalSupplyGroup(): Promise<Object> {
    try {
      const medicalSupplyGroupList = await this.prisma.medicalSupplyGroup.findMany({
        where: {
          isDeleted: false,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          isDeleted: false
        }
      })
      return { medicalSupplyGroupList }
    }
    catch (error) {
      throw error
    }
  }

  public async getMedicalSupplyGroupById(medicalSupplyGroupId: string): Promise<Object> {
    try {
      const medicalSupplyGroup = await this.prisma.medicalSupplyGroup.findUnique({
        where: {
          id: medicalSupplyGroupId,
          isDeleted: false,
        }
      })
      if (!medicalSupplyGroup) {
        throw new NotFoundException('Medical supply group not found')
      }

      delete medicalSupplyGroup.isDeleted

      return medicalSupplyGroup

    } catch (error) {
      throw error
    }
  }

  public async createMedicalSupplyGroup(medicalSupplyGroupDto: CreateMedicalSupplyGroupDto): Promise<Object> {
    try {
      const newMedicalSupplyGroup = await this.prisma.medicalSupplyGroup.create({
        data: {
          name: medicalSupplyGroupDto.name,
        }
      })
  
      delete newMedicalSupplyGroup.isDeleted
  
      return newMedicalSupplyGroup
    } catch (error) {
      throw error
    }
  }

  public async deleteMedicalSupplyGroup(medicalSupplyGroupId: string): Promise<Object> {
    const medicalSupplyGroup = await this.prisma.medicalSupplyGroup.findFirst({
      where: {
        id: medicalSupplyGroupId,
      }
    })

    if (!medicalSupplyGroup) throw new NotFoundException('Medical supply group not found')
    
    if (medicalSupplyGroup.isDeleted) throw new NotFoundException('Medical supply group already deleted')

    const medicaSupply = await this.prisma.medicalSupply.findFirst({
      where: {
        medicalGroupId: medicalSupplyGroupId,
      }
    })

    if (medicaSupply) throw new BadRequestException('Medical supply group attached to one or more medical supplies. Delete the reference before proceed.')

    await this.prisma.medicalSupplyGroup.update({
      where: {
        id: medicalSupplyGroupId,
      },
      data: {
        isDeleted: true,
      }
    })

    return {}
  }

  public async updateMedicalSupplyGroup(medicalSupplyGroupId: string, medicalSupplyGroupDto: UpdateMedicalSupplyGroupDto): Promise<Object> {
    const medicalSupplyGroup = await this.prisma.medicalSupplyGroup.findFirst({
      where: {
        id: medicalSupplyGroupId,
      }
    })

    if (!medicalSupplyGroup) throw new NotFoundException('Medical supply group not found')

    if (medicalSupplyGroup.isDeleted) throw new NotFoundException('Medical supply group is deleted')

    const updatedMedicalSupplyGroup = await this.prisma.medicalSupplyGroup.update({
      where: {
        id: medicalSupplyGroupId,
      },
      data: {
        name: medicalSupplyGroupDto.name,
      }
    })

    delete updatedMedicalSupplyGroup.isDeleted

    return updatedMedicalSupplyGroup
  }
}