import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/modules/app.module';
import {
  ApolloServerTestClient,
  createTestClient,
} from 'apollo-server-testing';
import { GraphQLModule } from '@nestjs/graphql';

describe('Students (e2e)', () => {
  let app: INestApplication;
  let client: ApolloServerTestClient;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    const module: GraphQLModule = app.get<GraphQLModule>(GraphQLModule);

    client = createTestClient((module as any).apolloServer);
  });

  it('O cliente deve estar definido', () => {
    expect(client).toBeDefined();
  });

  it('Deve retornar todos os estudantes', () => {
    return request(app.getHttpServer()).post('/graphql').expect(200);
  });
});
