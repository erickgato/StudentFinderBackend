import { NotImplementedException } from '@nestjs/common';
import { BaseConfig } from '../config/base.config';

describe('Class: BaseConfig', () => {
  const fakeEnv = {
    APP_NAME: 'students-finder',
    APP_ENV: 'development',
  };

  const config = new BaseConfig(fakeEnv);

  it('Deve retornar o valor da variável de ambiente', () => {
    expect(config.getValue('APP_NAME')).toBe(fakeEnv.APP_NAME);
  });

  it('Deve retornar um valor sem gerar uma exception', () => {
    expect(config.getValueOrFail('APP_NAME')).toBe(fakeEnv.APP_NAME);
  });

  it('Deve lançar uma exception caso a variavel não exista', () => {
    expect(() => config.getValueOrFail('APP_DEBUG')).toThrowError(
      NotImplementedException,
    );
  });

  it('Deve retornar produção como falso', () => {
    expect(config.isProduction()).toBeFalsy();
  });
});
