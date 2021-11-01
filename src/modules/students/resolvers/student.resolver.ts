import { Args, Query, Resolver } from '@nestjs/graphql';
import { thru } from 'lodash';
import { FindOptionsBuilder } from '../../common/builders/find-options-builder';
import { ILike } from 'typeorm';
import { GetStudentArgs } from '../dto/arguments/get-student';
import { StudentEntity } from '../entities';
import { StudentService } from '../services/student.service';

@Resolver(() => StudentEntity)
export class StudentResolver {
  constructor(private readonly studentsService: StudentService) {}

  @Query(() => [StudentEntity])
  async students(@Args() args: GetStudentArgs): Promise<StudentEntity[]> {
    const builder = new FindOptionsBuilder<StudentEntity, GetStudentArgs>();

    const options = thru(builder, (builder) => {
      builder.fill(args);

      builder.where('name', () => ({
        name: ILike(`%${args.name}%`),
      }));

      builder.where('document', () => ({
        document: args.document,
      }));

      builder.where('email', () => ({
        email: ILike(`%${args.email}%`),
      }));

      return builder.getOutput();
    });

    return this.studentsService.findByOptions(options);
  }
}
