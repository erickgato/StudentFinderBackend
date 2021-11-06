import { MigrationInterface, QueryRunner } from 'typeorm';

export class createStudentsTable1635780399442 implements MigrationInterface {
  name = 'createStudentsTable1635780399442';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`students\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(250) NULL, \`CPF\` varchar(14) NULL, \`email\` varchar(250) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_329c6665d552617baa05563f95\` (\`CPF\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_329c6665d552617baa05563f95\` ON \`students\``,
    );
    await queryRunner.query(`DROP TABLE \`students\``);
  }
}
