import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseService from '../../modules/common/config/typeorm.config';
import { StudentEntity } from 'src/modules/students/entities';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...databaseService.ormConfig(),
        entities: [StudentEntity],
      }),
    }),
  ],
})
export class SeederProviderModule {}
