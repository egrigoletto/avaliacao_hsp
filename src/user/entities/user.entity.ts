import { ApiProperty } from "@nestjs/swagger";

export class userGetDataResEntity {
  @ApiProperty({ example: 1, description: 'Id'})
  id: Number

  @ApiProperty({ example: 'teste@teste.com', description: 'Email para contato'})
  email: string

  @ApiProperty({ example: 'Teste', description: 'Nome do usuário'})
  fullName: string

  @ApiProperty({ example: '2024-01-22T00:52:43.381Z', description: 'Data de criação'})
  createdAt: string

  @ApiProperty({ example: '2024-01-22T00:52:43.381Z', description: 'Data de atualização'})
  updatedAt: string
}