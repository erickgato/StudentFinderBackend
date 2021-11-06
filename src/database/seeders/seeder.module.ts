import { SeederProviderModule } from './seeder-provider.module';
import { Module } from '@nestjs/common';
import { Seeder } from './seeder';
import { StudentsSeederModule } from './students/students-seeder.module';

@Module({
  imports: [SeederProviderModule, StudentsSeederModule],
  providers: [Seeder],
})
export class SeederModule {}
