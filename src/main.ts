import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import * as helmet from 'helmet';
import { isEqual } from 'lodash';

async function bootstrap() {
  const port = process.env.APP_PORT;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: /^(.*)/,
    credentials: true,
    allowedHeaders: '*',
    preflightContinue: false,
    optionsSuccessStatus: HttpStatus.OK,
  });
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  /** desabilita content security para o playground graphql em ambiente dev  */
  app.use(
    helmet({
      contentSecurityPolicy: isEqual(process.env.APP_ENV, 'production')
        ? undefined
        : false,
    }),
  );
  await app.listen(port);

  console.log('App:: listen on port', port);
}
bootstrap();
