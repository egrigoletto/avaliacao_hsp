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
} from "@nestjs/common";
import { JwtGuard } from "src/auth/guard"
import { MedicalSupplyService } from "./medical_supply.service"
import { CreateMedicalSupplyDto, UpdateMedicalSupplyDto } from "./dto"
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { 
  CreateMedicalSupplyDtoEntity,
  MedicalSupplyList,
  MedicalSupplyResponseById,
  UpdateMedicalSupplyDtoEntity
} from "./entities"

@ApiTags('Medical Supply')
@ApiBearerAuth()
@ApiResponse({ status: 200, description: 'OK' })
@ApiResponse({ status: 401, description: 'Unauthorized.' })
@ApiResponse({ status: 404, description: 'Medical supply not found.' })
@UseGuards(JwtGuard)
@Controller('medical-supply')
export class MedicalSupplyController {
    constructor(private medicalSupplyService: MedicalSupplyService) {}
    
    @ApiOperation({ summary: 'Recupera lista de dados' })
    @ApiResponse({ status: 200, description: 'OK', type: MedicalSupplyList })
    @HttpCode(HttpStatus.OK)
    @Get()
    getMedicalSupply() {
      return this.medicalSupplyService.getMedicalSupply();
    }
    
    @ApiOperation({ summary: 'Recupera os Dados de um medicamento, dado seu Id' })
    @ApiResponse({ status: 200, description: 'OK', type: MedicalSupplyResponseById })
    @HttpCode(HttpStatus.OK)
    @Get(':id')
    getMedicalSupplyById(@Param('id') id: string) {
      return this.medicalSupplyService.getMedicalSupplyById(id);
    }

    @ApiOperation({ summary: 'Adiciona um medicamento' })
    @ApiBody({ type: CreateMedicalSupplyDtoEntity })
    @ApiResponse({ status: 201, description: 'OK', type: MedicalSupplyResponseById })
    @Post()
    createMedicalSupply(@Body() createMedicalSupplyDto: CreateMedicalSupplyDto) {
      return this.medicalSupplyService.createMedicalSupply(createMedicalSupplyDto);
    }

    @ApiOperation({ summary: 'Deleta logicamente um medicamento' })
    @HttpCode(HttpStatus.OK)
    @Delete(':id')
    deleteMedicalSupply(@Param('id') id: string) {
      return this.medicalSupplyService.deleteMedicalSupply(id);
    }
    
    @ApiOperation({ summary: 'Altera os dados de um medicamento' })
    @ApiBody({ type: UpdateMedicalSupplyDtoEntity })
    @ApiResponse({ status: 200, description: 'OK', type: MedicalSupplyResponseById })
    @HttpCode(HttpStatus.OK)
    @Patch(':id')
    updateMedicalSupply(@Param('id') id: string, @Body() updateMedicalSupplyDto: UpdateMedicalSupplyDto) {
      return this.medicalSupplyService.updateMedicalSupply(id, updateMedicalSupplyDto);
    }
}