import { StudentEntity } from 'src/modules/students/entities';
import { FindOptionsBuilder } from '../builders/find-options-builder';

describe('Class: FindOptionsBuilder', () => {
  const getBuilder = () =>
    new FindOptionsBuilder<
      StudentEntity,
      { name?: string; document?: string }
    >();
  it('Deve retornar um objeto vazio caso não tenha filtros', () => {
    const builder = getBuilder();
    builder.fill({});

    builder.where('name', () => {
      return {
        name: 'test',
      };
    });

    expect(builder.getOutput()).toStrictEqual({});
  });

  it('Deve aplicar um filtro por nome', () => {
    const builder = getBuilder();
    builder.fill({
      name: 'Erick',
    });

    builder.where('name', () => ({
      name: 'Erick',
    }));

    expect(builder.getOutput()).toStrictEqual({
      where: {
        name: 'Erick',
      },
    });
  });

  it('Deve sobrescrever o where', () => {
    const builder = getBuilder();
    builder.fill({ name: 'Erick', document: '123' });

    builder.when('name', () => ({
      where: {
        name: 'Erick',
      },
    }));

    builder.when('document', () => ({
      where: {
        document: '123',
      },
    }));

    expect(builder.getOutput()).toStrictEqual({
      where: {
        document: '123',
      },
    });
  });
});
