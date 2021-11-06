import { CommonModule } from './common/common.module';
import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    CommonModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      debug: true,
      playground: true,
    }),
    StudentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
