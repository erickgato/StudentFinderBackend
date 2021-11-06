import { NestFactory } from '@nestjs/core';
import { SeederModule } from './database/seeders/seeder.module';
import { Seeder } from './database/seeders/seeder';

/**
 * Cria uma aplicação para executar o seed
 *
 */
async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule)
    .then((appContext) => {
      const seeder = appContext.get(Seeder);
      seeder
        .seed()
        .then(() => console.log('Seeding completed!'))
        .finally(() => appContext.close());
    })
    .catch((error) => {
      throw error;
    });
}

bootstrap();
