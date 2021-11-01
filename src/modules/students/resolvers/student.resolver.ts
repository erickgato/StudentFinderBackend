import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetStudentArgs } from '../dto/arguments/get-student';
import { StudentEntity } from '../entities';
import { StudentService } from '../services/student.service';

@Resolver(() => StudentEntity)
export class StudentResolver {
  constructor(private readonly studentsService: StudentService) {}

  @Query(() => [StudentEntity])
  async students(@Args() args: GetStudentArgs): Promise<StudentEntity[]> {
    return this.studentsService.find();
  }
}
