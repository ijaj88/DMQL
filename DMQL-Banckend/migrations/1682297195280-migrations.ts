import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1682297195280 implements MigrationInterface {
    name = 'migrations1682297195280'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`patient\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`patient\` ADD CONSTRAINT \`FK_6636aefca0bdad8933c7cc3e394\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`patient\` DROP FOREIGN KEY \`FK_6636aefca0bdad8933c7cc3e394\``);
        await queryRunner.query(`ALTER TABLE \`patient\` DROP COLUMN \`userId\``);
    }

}
