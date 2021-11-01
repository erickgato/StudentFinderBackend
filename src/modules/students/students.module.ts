import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  controllers: [],
  exports: [],
  providers: [],
})
export class StudentsModule {}
