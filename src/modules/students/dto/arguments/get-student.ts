import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetStudentArgs {
  @Field({
    nullable: true,
  })
  document?: string;
  @Field({
    nullable: true,
  })
  email?: string;
}
