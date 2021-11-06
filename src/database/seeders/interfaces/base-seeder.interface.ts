import { EntityManager, BaseEntity } from 'typeorm';

export type ComparatorFn<T extends BaseEntity> = (
  manager: EntityManager,
  entity: T,
) => Promise<boolean>;

export interface SeederChainContract<T extends BaseEntity> {
  insert(entities: T[], comparatorFn: ComparatorFn<T>): Promise<void>;
  seed(): Promise<void> | void;
}
