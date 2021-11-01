import { BaseEntity, FindConditions, FindManyOptions } from 'typeorm';
import { ApplyFn, FilterBuilder } from '../interfaces/filter-builder';
import { ObjectBuilder } from '../interfaces/object-builder';

export class FindOptionsBuilder<
  T extends BaseEntity,
  R extends Record<string, any> = unknown,
> implements
    ObjectBuilder<FindManyOptions<T>>,
    FilterBuilder<FindManyOptions<T>>
{
  protected inputObject: R;
  protected output: FindManyOptions<T>;
  protected last: { key: keyof R; applyFn: ApplyFn<FindManyOptions<T>> } = {
    key: null,
    applyFn: () => null,
  };

  fill(record: R) {
    this.inputObject = record;
    return this;
  }
  getOutput() {
    return this.output;
  }

  /**
   * Adiciona as condições
   * recebidas para um ponteiro interno
   *
   * @param key
   * @param applyFn
   * @returns
   */
  protected computeConditions(
    key: keyof R,
    applyFn: ApplyFn<FindManyOptions<T>>,
  ) {
    this.last.key = key;
    this.last.applyFn = applyFn;

    return this;
  }

  /**
   * Checa de o ultimo input
   * recebido é valido
   *
   * @returns {Boolean}
   */
  protected hasValidInput(): boolean {
    return !!this.inputObject[this.last.key] || null;
  }

  /**
   * Realiza as mudanças no estado
   * computado
   *
   * @param key
   * @param applyFn
   * @param makeChanges
   * @returns
   */
  protected makeChanges(
    key: keyof R,
    applyFn: ApplyFn<FindManyOptions<T>>,
    processOptions: (
      newOptions: Partial<FindManyOptions<T>>,
    ) => FindManyOptions<T>,
  ) {
    this.computeConditions(key, applyFn);

    if (!this.hasValidInput()) {
      return this;
    }
    const value = this.inputObject[key] || null;

    if (!value) {
      return this;
    }

    const computedFilter = applyFn(this.output);

    this.output = processOptions(computedFilter);
    return this;
  }

  /**
   * Quando uma chave for válida
   *
   * @param key
   * @param applyFn
   * @returns
   */
  when(key: keyof R, applyFn: ApplyFn<FindManyOptions<T>>) {
    return this.makeChanges(key, applyFn, (changes) => ({
      ...this.output,
      ...changes,
    }));
  }

  /**
   * Quando uma chave for válida adiciona um where ao output
   *
   * @param key
   * @param applyFn
   * @returns
   */
  where(key: keyof R, applyFn: () => FindConditions<T>) {
    return this.makeChanges(
      key,
      applyFn as unknown as ApplyFn<FindManyOptions<T>>,
      (changes) => ({
        ...this.output,
        where: {
          ...(this.output?.where as Record<string, any>),
          ...changes,
        },
      }),
    );
  }
}
