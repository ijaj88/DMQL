import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1681585403233 implements MigrationInterface {
    name = 'migrations1681585403233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`password\` varchar(255) NOT NULL, \`ethnicity\` varchar(255) NULL, \`race\` varchar(255) NULL, \`level\` varchar(255) NULL, \`gender\` varchar(255) NULL, \`department\` varchar(255) NULL, \`age\` int NULL, \`username\` varchar(200) NOT NULL, \`roles\` text NULL, \`isAccountDisabled\` tinyint NULL, \`email\` varchar(200) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`username\` (\`username\`), UNIQUE INDEX \`email\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`email\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`username\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
