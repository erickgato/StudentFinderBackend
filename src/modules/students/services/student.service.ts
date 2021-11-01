import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { StudentEntity } from '../entities';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  async find() {
    return this.studentRepository.find();
  }

  async findByOptions(options: FindManyOptions<StudentEntity>) {
    return this.studentRepository.find(options);
  }
}
