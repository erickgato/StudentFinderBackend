/**
 * Builder para gerenciar objetos
 */
export interface ObjectBuilder<T> {
  fill(obj: Record<string, any>): this;
  getOutput(): T;
}
