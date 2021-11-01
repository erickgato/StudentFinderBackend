import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetStudentArgs {
  @Field({
    nullable: true,
  })
  name?: string;
  @Field({
    nullable: true,
  })
  document?: string;
  @Field({
    nullable: true,
  })
  email?: string;
}
