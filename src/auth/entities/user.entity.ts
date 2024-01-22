import { ApiProperty } from '@nestjs/swagger';

export class SignupReqEntity {
  @ApiProperty({ example: 'teste@teste.com', description: 'Email para contato'})
  email: string

  @ApiProperty({ example: '456', description: 'Senha de acesso'})
  password: string

  @ApiProperty({ example: 'Teste', description: 'Nome do usuário'})
  name: string
}

export class SignupResEntity {
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

export class SigninReqEntity {
  @ApiProperty({ example: 'teste@teste.com', description: 'Email para contato'})
  email: string

  @ApiProperty({ example: '456', description: 'Senha de acesso'})
  password: string
}

export class SigninResEntity {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoibmFkYTNAbmFkYS5jb20iLCJpYXQiOjE3MDU4Nzg0NDksImV4cCI6MTcwNTg4MDI0OX0.rrjwo-589PjQHia24rOukZ7wPu0TkDb0NydDBYsIB2o', description: 'Token de acesso'})
  access_token: string
}