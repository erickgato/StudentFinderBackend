import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities';
import { StudentResolver } from './resolvers/student.resolver';
import { StudentService } from './services/student.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  controllers: [],
  providers: [StudentService, StudentResolver],
  exports: [StudentService, StudentResolver],
})
export class StudentsModule {}
