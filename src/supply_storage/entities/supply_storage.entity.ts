import { ApiProperty } from '@nestjs/swagger';

export class medicalSupplyStorageListRes {
  @ApiProperty({ example: [
    {
      id: '294baf8d-45c2-4e0f-a727-9c7b769c18fa',
      createdAt: '2024-01-21T23:09:38.725Z',
      updatedAt: '2024-01-21T23:09:38.725Z',
      batch: 'Loren',
      quantity: 1,
      informations: 'Loren Ipsun',
    }
  ], description: 'Lista de todos os repositórios'})
  medicalSupplyStorageList: Object[] 
}

export class medicalSupplyStorageResById {
  @ApiProperty({ example:'294baf8d-45c2-4e0f-a727-9c7b769c18fa', description: 'Id do lugar onde item está depositado'})
  id: string

  @ApiProperty({ example:'2024-01-21T23:09:38.725Z', description: 'Data de criação do repositório do item'})
  createdAt: string

  @ApiProperty({ example:'2024-01-21T23:09:38.725Z', description: 'Data de atualização do repositório do item'})
  updatedAt: string
  
  @ApiProperty({ example:'Loren', description: 'Lote do item'})
  batch: string

  @ApiProperty({ example: 1, description: 'Quantidade do item'})
  quantity: number

  @ApiProperty({ example:'Loren Ipsun', description: 'Informações adicionais do item'})
  informations: string

  @ApiProperty({ example: [
    {
      id: 'd39c6883-0dae-4680-8408-6d92a933c055',
      createdAt: '2024-01-21T22:40:15.478Z',
      updatedAt: '2024-01-21T22:40:15.478Z',
      name: 'Loren Ipsun',
      brand: 'Loren Ipsun',
      description: 'Loren Ipsun',
      medicalGroupId: '045fe9ea-8346-445f-a573-00bc66271882'
    }
  ], description: 'Dados do medicamento associado ao item'})
  medicalSupply: Object 
}

export class medicalSupplyStorageRes {
  @ApiProperty({ example:'294baf8d-45c2-4e0f-a727-9c7b769c18fa', description: 'Id do lugar onde item está depositado'})
    id: string

    @ApiProperty({ example:'2024-01-21T23:09:38.725Z', description: 'Data de criação do repositório do item'})
    createdAt: string

    @ApiProperty({ example:'2024-01-21T23:09:38.725Z', description: 'Data de atualização do repositório do item'})
    updatedAt: string
    
    @ApiProperty({ example:'Loren', description: 'Lote do item'})
    batch: string

    @ApiProperty({ example:1, description: 'Quantidade do item'})
    quantity: number

    @ApiProperty({ example:'Loren Ipsun', description: 'Informações adicionais do item'})
    informations: string

    @ApiProperty({ example:'d39c6883-0dae-4680-8408-6d92a933c055', description: 'Id do medicamento vinculado'})
    medicalSupplyId: string
}

export class CreateMedicalSupplyStorageDtoEntity {
  @ApiProperty({ example: 'Loren', description: 'Lote do item, único'})
  batch: string

  @ApiProperty({ example: 1, description: 'Quantidade do item' })
  quantity: number

  @ApiProperty({ example: 'Loren Ipsun', description: 'Informações adicionais do item, opcional' })
  informations: string

  @ApiProperty({ example: 'd39c6883-0dae-4680-8408-6d92a933c055', description: 'Id do medicamento vinculado' })
  medicalSupplyId: string
}

export class UpdateMedicalSupplyStorageDtoEntity {
  @ApiProperty({ example: 'Loren', description: 'Lote do item, único, opcional'})
  batch: string

  @ApiProperty({ example: 1, description: 'Quantidade do item, opcional' })
  quantity: number

  @ApiProperty({ example: 'Loren Ipsun', description: 'Informações adicionais do item, opcional' })
  informations: string

  @ApiProperty({ example: 'd39c6883-0dae-4680-8408-6d92a933c055', description: 'Id do medicamento vinculado, opcional' })
  medicalSupplyId: string
}
