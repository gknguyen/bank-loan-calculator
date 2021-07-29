import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import debug from 'debug';
import * as express from 'express';
import * as helmet from 'helmet';
import * as httpContext from 'express-http-context';
import ENV from './config/env';
import { AppModule } from './modules/app/app.module';
import initializeSwagger from './swagger/swagger.helper';

const logger = debug(ENV.DEBUG);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  initializeApp(app);
  initializeSwagger(app);

  await app.listen(ENV.PORT);

  const url = await app.getUrl();
  return url;
}

function initializeApp(app: INestApplication) {
  app.use(helmet());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(httpContext.middleware);
  app.setGlobalPrefix('/api');
}

bootstrap()
  .then((url) => {
    logger(`Started on ${url}/api`);
    logger(`Docs available on ${url}/docs`);
  })
  .catch((err) => logger(`Failed to start the service: ${err}`));
