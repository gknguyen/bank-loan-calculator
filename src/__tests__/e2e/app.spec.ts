import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../modules/app/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /', (done) => {
    request(app.getHttpServer())
      .get('/')
      .then((res) => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World!');
        done();
      })
      .catch((err) => done(err));
  });

  afterAll(async () => {
    await app.close();
  });
});
