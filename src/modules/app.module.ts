import { CommonModule } from './common/common.module';
import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [CommonModule, StudentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
