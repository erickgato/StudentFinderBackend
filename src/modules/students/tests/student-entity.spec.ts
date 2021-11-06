import { StudentEntity } from '../entities';
describe('Entity: StudentEntity', () => {
  it('Deve criar uma entidade com valores customizados', () => {
    const entity = new StudentEntity(
      'Jhon',
      '000.000.000-00',
      'jhon@doe.com.br',
    );
    expect(entity.name).toBe('Jhon');
    expect(entity.document).toBe('000.000.000-00');
    expect(entity.email).toBe('jhon@doe.com.br');
  });
});
