import { Injectable } from '@nestjs/common';
import { StudentEntity } from 'src/modules/students/entities';
import { BaseSeeder } from '../base.seeder';
import * as _ from 'lodash';
import * as faker from 'faker/locale/pt_BR';
import { generate as fakeCpf } from 'gerador-validador-cpf';

@Injectable()
export class StudentsSeederService extends BaseSeeder<StudentEntity> {
  /**
   * Gera dados fakes com faker
   *
   * @returns
   */
  protected async fakes(): Promise<StudentEntity[]> {
    return Promise.all(
      _.range(1, 900).map(
        () =>
          new StudentEntity(
            faker.name.findName(),
            fakeCpf(),
            faker.internet.email(),
          ),
      ),
    );
  }

  async seed() {
    return this.insert(await this.fakes(), async (manager, student) => {
      return !!(await manager.findOne(StudentEntity, {
        where: {
          document: student.document,
        },
      }));
    });
  }
}
