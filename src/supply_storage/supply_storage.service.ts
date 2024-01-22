import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMedicalSupplyStorageDto } from "./dto/supply_storage.dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class SupplyStorageService {
  constructor(private prisma: PrismaService){}

  public async getMedicalSupplyStorage(): Promise<Object> {
    try {
      const medicalSupplyStorageList = await this.prisma.medicalSupplyStorage.findMany({
        where: {
          isDeleted: false,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          batch: true,
          quantity: true, 
          informations: true,
          medicalSupllyId: true
        }
      })
  
      return { medicalSupplyStorageList }
    } catch (error) {
      throw error
    }
  }

  public async getMedicalSupplyStorageById(medicalSupplyStorageId: string): Promise<Object>  {
    try {
      const medicalSupplyStorage = await this.prisma.medicalSupplyStorage.findUnique({
        where: {
          id: medicalSupplyStorageId,
        },
        include: {
          medicalSupply: true,
        }
      })
  
      if (!medicalSupplyStorage) throw new NotFoundException('Medical supply storage not found')
  
      delete medicalSupplyStorage.isDeleted
      delete medicalSupplyStorage.medicalSupllyId
      delete medicalSupplyStorage.medicalSupply.isDeleted
  
      return medicalSupplyStorage
    } catch (error) {
      throw error
    }
  }

  public async createMedicalSupplyStorage(createMedicalSupplyStorageDto: CreateMedicalSupplyStorageDto): Promise<Object> {
    try {
      const medicalSupply = await this.prisma.medicalSupply.findUnique({
        where: {
          id: createMedicalSupplyStorageDto.medicalSupllyId,
          isDeleted: false
        }
      })
  
      if (!medicalSupply) throw new NotFoundException('Medical supply not found')
  
      const medicalSupplyStorage = await this.prisma.medicalSupplyStorage.create({
        data: createMedicalSupplyStorageDto,
      })
  
      delete medicalSupplyStorage.isDeleted
  
      return medicalSupplyStorage
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Batch already taken')
        }   
      }
      throw error
    }
  }

  public async deleteMedicalSupplyStorage(medicalSupplyStorageId: string): Promise<Object> {
    try {
      const medicalSupplyStorage = await this.prisma.medicalSupplyStorage.findUnique({
        where: {
          id: medicalSupplyStorageId,
        }
      })
  
      if (!medicalSupplyStorage) throw new NotFoundException('Medical supply storage not found')
  
      if (medicalSupplyStorage.isDeleted) throw new NotFoundException('Medical supply storage already deleted')
  
      await this.prisma.medicalSupplyStorage.update({
        where: {
          id: medicalSupplyStorageId,
        },
        data: {
          isDeleted: true,
        }
      })
  
      return {}
    } catch (error) {
      throw error
    }
  }

  public async updateMedicalSupplyStorage(medicalSupplyStorageId: string, createMedicalSupplyStorageDto: CreateMedicalSupplyStorageDto): Promise<Object> {
    try {
      const medicalSupplyStorage = await this.prisma.medicalSupplyStorage.findUnique({
        where: {
          id: medicalSupplyStorageId,
          isDeleted: false
        }
      })
  
      if (!medicalSupplyStorage) throw new NotFoundException('Medical supply storage not found')
  
      const medicalSupply = await this.prisma.medicalSupply.findUnique({
        where: {
          id: createMedicalSupplyStorageDto.medicalSupllyId,
          isDeleted: false
        }
      })
  
      if (!medicalSupply) throw new NotFoundException('Medical supply not found')
  
      const updatedMedicalSupplyStorage = await this.prisma.medicalSupplyStorage.update({
        where: {
          id: medicalSupplyStorageId,
        },
        data: createMedicalSupplyStorageDto,
      })
  
      delete updatedMedicalSupplyStorage.isDeleted
  
      return updatedMedicalSupplyStorage
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Batch already taken')
        }   
      }
      throw error
    }
  }
}