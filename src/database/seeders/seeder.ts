import { Injectable } from '@nestjs/common';
import { BaseSeeder } from './base.seeder';
import { StudentsSeederService } from './students/students-seeder.service';

@Injectable()
export class Seeder {
  constructor(private readonly studentsSeeder: StudentsSeederService) {}
  /**
   * Call all seeders
   *
   * @returns
   */
  async seed() {
    const seeders = Object.values(this).filter(
      (property) => property instanceof BaseSeeder,
    );
    await Promise.all(seeders.map((seeder) => seeder.seed()));
  }
}
