import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Avaliação')
    .setDescription('APIs do desafio')
    .setVersion('1.0')
    .addTag('APIs Gerais')
    .addBearerAuth()
    .build()

  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
    include: [AppModule],
  }

  const document = SwaggerModule.createDocument(app, config, options)
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }))
  await app.listen(9800);
}
bootstrap();
