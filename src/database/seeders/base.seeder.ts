import {
  ComparatorFn,
  SeederChainContract,
} from './interfaces/base-seeder.interface';
import { getManager, BaseEntity } from 'typeorm';
import * as _ from 'lodash';

export abstract class BaseSeeder<T extends BaseEntity>
  implements SeederChainContract<T>
{
  /**
   * Insere os dados no banco, caso a função se comparação seja
   * false
   *
   * @param entities
   * @param comparatorFn
   * @returns
   */
  async insert(entities: T[], comparatorFn: ComparatorFn<T>) {
    return getManager().transaction(async (manager) => {
      for (const entity of entities) {
        const hasRecord = await comparatorFn(manager, entity);
        if (_.isEqual(hasRecord, true)) continue;
        await manager.save(entity);
      }
    });
  }

  /**
   * Chamado quando o seeder invocar a
   * classe atual
   *
   * @returns
   */
  abstract seed(): Promise<void> | void;
}
