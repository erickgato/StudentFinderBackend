import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import typeormConfig from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig.ormConfig()),
    LoggerModule.forRoot({
      pinoHttp: {
        redact: {
          remove: true,
          paths: ['pid', 'responseTime', 'res.headers', 'req.headers'],
        },
      },
    }),
  ],
})
export class CommonModule {}
