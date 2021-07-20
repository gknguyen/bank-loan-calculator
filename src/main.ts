import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import initializeSwagger from './swagger/swagger.helper';
import debug from 'debug';
import ENV from './config/env';

const logger = debug(ENV.DEBUG);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  initializeSwagger(app);
  await app.listen(ENV.PORT);

  const url = await app.getUrl();
  return url;
}

bootstrap()
  .then((url) => {
    logger(`Started on ${url}`);
    logger(`Docs available on ${url}/docs`);
  })
  .catch((err) => logger(`Failed to start the service: ${err}`));
