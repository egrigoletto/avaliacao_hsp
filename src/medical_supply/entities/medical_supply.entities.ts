import { ApiProperty } from "@nestjs/swagger";

export class MedicalSupplyList {
  @ApiProperty({ example: [
    {
      id: 'string',
      createdAt: 'string',
      updatedAt: 'string',
      name: 'string',
      brand: 'string',
      description: 'string',
      medicalGroupId: 'string'
    }
  ], description: 'Lista de todos os medicamentos' })
  medicalSupplyList: Object[];
}

export class MedicalSupplyResponse {
  @ApiProperty({ example: '2ce5fa18-e438-4d0a-90f8-052d217f4121', description: 'ID do medicamento' })
  id: string;

  @ApiProperty({ example: '2024-01-21T20:10:58.695Z', description: 'Data de criação do medicamento' }) 
  createdAt: string

  @ApiProperty({ example: '2024-01-21T22:38:40.456Z', description: 'Data de atualização do medicamento' })
  updatedAt: string

  @ApiProperty({ example: 'Loren Ipsun', description: 'Nome do medicamento' })
  name: string

  @ApiProperty({ example: 'Loren Ipsun', description: 'Marca do medicamento' })
  brand: string

  @ApiProperty({ example: 'Loren Ipsun', description: 'Descrição do medicamento' })
  description: string

  @ApiProperty({ example: '045fe9ea-8346-445f-a573-00bc66271882', description: 'ID do grupo de medicamentos vinculado ao medicamento' })
  medicalGroupId: string
}

export class MedicalSupplyResponseById {
  @ApiProperty({ example: '2ce5fa18-e438-4d0a-90f8-052d217f4121', description: 'ID do medicamento' })
  id: string;

  @ApiProperty({ example: '2024-01-21T20:10:58.695Z', description: 'Data de criação do medicamento' }) 
  createdAt: string

  @ApiProperty({ example: '2024-01-21T22:38:40.456Z', description: 'Data de atualização do medicamento' })
  updatedAt: string

  @ApiProperty({ example: 'Loren Ipsun', description: 'Nome do medicamento' })
  name: string

  @ApiProperty({ example: 'Loren Ipsun', description: 'Marca do medicamento' })
  brand: string

  @ApiProperty({ example: 'Loren Ipsun', description: 'Descrição do medicamento' })
  description: string

  @ApiProperty({ example: {
    id: '2ce5fa18-e438-4d0a-90f8-052d217f4121',
    createdAt: '2024-01-21T20:10:58.695Z',
    updatedAt: '2024-01-21T20:10:58.695Z',
    name: 'Loren Ipsun',
  }, description: 'Grupo de medicamentos vinculado ao medicamento' })
  medicalSupplyGroup: Object
}

export class CreateMedicalSupplyDtoEntity {
  @ApiProperty({ example: 'Loren Ipsun', description: 'Nome do medicamento' })
  name: string

  @ApiProperty({ example: 'Loren Ipsun', description: 'Marca do medicamento' })
  brand: string

  @ApiProperty({ example: 'Loren Ipsun', description: 'Descrição do medicamento, opcional' })
  description: string

  @ApiProperty({ example: '045fe9ea-8346-445f-a573-00bc66271882', description: 'ID do grupo de medicamentos vinculado ao medicamento' })
  medicalGroupId: string
}

export class UpdateMedicalSupplyDtoEntity {
  @ApiProperty({ example: 'Loren Ipsun', description: 'Nome do medicamento, opcional' })
  name: string

  @ApiProperty({ example: 'Loren Ipsun', description: 'Marca do medicamento, opcional' })
  brand: string

  @ApiProperty({ example: 'Loren Ipsun', description: 'Descrição do medicamento, opcional' })
  description: string

  @ApiProperty({ example: '045fe9ea-8346-445f-a573-00bc66271882', description: 'ID do grupo de medicamentos vinculado ao medicamento, opcional' })
  medicalGroupId: string
}
