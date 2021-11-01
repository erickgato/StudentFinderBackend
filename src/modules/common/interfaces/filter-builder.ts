/**
 * Função para aplicar uma modificação
 * parcial em um objeto
 *
 */
export type ApplyFn<T> = (generated: T) => Partial<T>;

/**
 * Contrato de gerador
 * de filtros, comparando um input válido
 * e aplicando sobre o objeto alguma composição
 */
export interface FilterBuilder<T> {
  when(key: string, applyFn: ApplyFn<T>): this;
}
