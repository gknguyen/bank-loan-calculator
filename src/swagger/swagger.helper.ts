import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default function initializeSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Bank Loan Calculator API')
    .setDescription(
      'API specification for the service | [swagger.json](swagger.json)',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      displayOperationId: true,
    },
  });
}
