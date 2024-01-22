import { Body,
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
import { JwtGuard } from "src/auth/guard";
import { MedicalSupplyGroupService } from "./medical_supply_group.service";
import { CreateMedicalSupplyGroupDto, UpdateMedicalSupplyGroupDto } from "./dto";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateMedicalSupplyGroupReqDto, MedicalSupplyGroupListRes, MedicalSupplyGroupRes, UpdateMedicalSupplyGroupReqDto } from "./entities";

@ApiTags('Medical Supply Group')
@ApiBearerAuth()
@ApiResponse({ status: 200, description: 'OK' })
@ApiResponse({ status: 401, description: 'Unauthorized.' })
@ApiResponse({ status: 404, description: 'Medical supply group not found.' })
@UseGuards(JwtGuard)
@Controller('medical-supply-group')
export class MedicalSupplyGroupController {
  constructor(private medicalSupplyGroupService: MedicalSupplyGroupService) {}
  
  @ApiOperation({ summary: 'Recupera lista de dados' })
  @ApiResponse({ status: 200, description: 'OK', type: MedicalSupplyGroupListRes })
  @HttpCode(HttpStatus.OK)
  @Get()
  getMedicalSupplyGroup() {
    return this.medicalSupplyGroupService.getMedicalSupplyGroup();
  }
  
  @ApiOperation({ summary: 'Recupera os Dados de um grupo de medicamentos, dado seu Id' })
  @ApiResponse({ status: 200, description: 'OK', type: MedicalSupplyGroupRes })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getMedicalSupplyGroupById(@Param('id') id: string) {
    return this.medicalSupplyGroupService.getMedicalSupplyGroupById(id);
  }

  @ApiOperation({ summary: 'Cria um grupo de medicamentos' })
  @ApiBody({ type: CreateMedicalSupplyGroupReqDto })
  @ApiResponse({ status: 201, description: 'Created', type: MedicalSupplyGroupRes })
  @Post()
  createMedicalSupplyGroup(@Body() createMedicalSupplyDto: CreateMedicalSupplyGroupDto) {
    return this.medicalSupplyGroupService.createMedicalSupplyGroup(createMedicalSupplyDto);
  }

  @ApiOperation({ summary: 'Deleta logicamente um grupo de medicamentos' })
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  deleteMedicalSupplyGroup(@Param('id') id: string) {
    return this.medicalSupplyGroupService.deleteMedicalSupplyGroup(id);
  }

  @ApiOperation({ summary: 'Altera os dados de um grupo de medicamentos' })
  @ApiBody({ type: UpdateMedicalSupplyGroupReqDto })
  @ApiResponse({ status: 200, description: 'OK', type: MedicalSupplyGroupRes })
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  updateMedicalSupplyGroup(@Param('id') id: string, @Body() updateMedicalSupplyDto: UpdateMedicalSupplyGroupDto) {
    return this.medicalSupplyGroupService.updateMedicalSupplyGroup(id, updateMedicalSupplyDto);
  }
    
}