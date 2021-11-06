import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from '../../../modules/students/entities';
import { StudentsSeederService } from './students-seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  providers: [StudentsSeederService],
  exports: [StudentsSeederService],
})
export class StudentsSeederModule {}
