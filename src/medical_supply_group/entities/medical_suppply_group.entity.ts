import { ApiProperty } from "@nestjs/swagger";

export class MedicalSupplyGroupListRes {
  @ApiProperty({ example: [
    {
      id: 'e6e1ea10-e09b-4d16-8b43-f3c9d1d33ee8',
      createdAt: '2024-01-21T15:28:21.006Z',
      updatedAt: '2024-01-21T15:28:21.006Z',
      name: 'Loren Ipsun',
    }
  ], description: 'Lista de todos os grupos de medicamentos' })
  medicalSupplyGroupList: Object[]
}

export class MedicalSupplyGroupRes {
  @ApiProperty({ example: 'e6e1ea10-e09b-4d16-8b43-f3c9d1d33ee8', description: 'Id do grupo de medicamentos' })
  id: string

  @ApiProperty({ example: '2024-01-21T15:28:21.006Z', description: 'Data de criação' })
  createdAt: string
  
  @ApiProperty({ example: '2024-01-21T15:28:21.006Z', description: 'Data de atualização' })
  updatedAt: string
  
  @ApiProperty({ example: 'Loren Ipsun', description: 'Nome do grupo' })
  name: string
}

export class CreateMedicalSupplyGroupReqDto {
  @ApiProperty({ example: 'Loren Ipsun', description: 'Nome do grupo' })
  name: string
}

export class UpdateMedicalSupplyGroupReqDto {
  @ApiProperty({ example: 'Loren Ipsun', description: 'Nome do grupo, opcional' })
  name: string
}
