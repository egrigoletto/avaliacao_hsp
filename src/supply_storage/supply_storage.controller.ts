import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards
} from "@nestjs/common"
import { JwtGuard } from "src/auth/guard"
import { SupplyStorageService } from "./supply_storage.service"
import { CreateMedicalSupplyStorageDto, UpdateMedicalSupplyStorageDto } from "./dto/supply_storage.dto"
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { CreateMedicalSupplyStorageDtoEntity, UpdateMedicalSupplyStorageDtoEntity, medicalSupplyStorageListRes, medicalSupplyStorageRes, medicalSupplyStorageResById } from "./entities"

@ApiTags('Medical Supply Storage')
@ApiBearerAuth()
@ApiResponse({ status: 200, description: 'OK' })
@ApiResponse({ status: 401, description: 'Unauthorized.' })
@ApiResponse({ status: 404, description: 'Medical supply storage not found.' })
@UseGuards(JwtGuard)
@Controller('medical-supply-storage')
export class SupplyStorageController {
  constructor(private supplyStorageService: SupplyStorageService) {}

  @ApiOperation({ summary: 'Recupera lista de dados' })
  @ApiResponse({ status: 200, description: 'OK', type: medicalSupplyStorageListRes })
  @HttpCode(HttpStatus.OK)
  @Get()
  getMedicalSupplyStorage() {
    return this.supplyStorageService.getMedicalSupplyStorage()
  }

  @ApiOperation({ summary: 'Recupera os Dados de um repositório, dado seu Id' })
  @ApiResponse({ status: 200, description: 'OK', type: medicalSupplyStorageResById })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getMedicalSupplyStorageById(@Param('id') id: string) {
    return this.supplyStorageService.getMedicalSupplyStorageById(id)
  }

  @ApiOperation({ summary: 'Adiciona um repositório' })
  @ApiBody({ type: CreateMedicalSupplyStorageDtoEntity })
  @ApiResponse({ status: 201, description: 'OK', type: medicalSupplyStorageRes })
  @Post()
  createMedicalSupplyStorage(@Body() createMedicalSupplyStorageDto: CreateMedicalSupplyStorageDto) {
    return this.supplyStorageService.createMedicalSupplyStorage(createMedicalSupplyStorageDto)
  }

  @ApiOperation({ summary: 'Deleta logicamente um repositório' })
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  deleteMedicalSupplyStorage(@Param('id') id: string) {
    return this.supplyStorageService.deleteMedicalSupplyStorage(id)
  }

  @ApiOperation({ summary: 'Modifica um repositório' })
  @ApiBody({ type: UpdateMedicalSupplyStorageDtoEntity })
  @ApiResponse({ status: 201, description: 'OK', type: medicalSupplyStorageRes })
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  updateMedicalSupplyStorage(@Param('id') id: string, @Body() updateMedicalSupplyDto: UpdateMedicalSupplyStorageDto) {
    return this.supplyStorageService.updateMedicalSupplyStorage(id, updateMedicalSupplyDto)
  }
}