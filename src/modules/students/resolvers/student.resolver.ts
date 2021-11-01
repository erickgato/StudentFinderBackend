import { Args, Query, Resolver } from '@nestjs/graphql';
import { thru } from 'lodash';
import { FindOptionsBuilder } from 'src/modules/common/builders/find-options-builder';
import { ILike } from 'typeorm';
import { GetStudentArgs } from '../dto/arguments/get-student';
import { StudentEntity } from '../entities';
import { StudentService } from '../services/student.service';

@Resolver(() => StudentEntity)
export class StudentResolver {
  constructor(private readonly studentsService: StudentService) {}

  @Query(() => [StudentEntity])
  async students(@Args() args: GetStudentArgs): Promise<StudentEntity[]> {
    const options = thru(
      new FindOptionsBuilder<StudentEntity, GetStudentArgs>(),
      (builder) => {
        builder.fill(args);

        builder.where('name', () => ({
          name: ILike(`%${args.name}%`),
        }));

        return builder.getOutput();
      },
    );

    return this.studentsService.findByOptions(options);
  }
}
