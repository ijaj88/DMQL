import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1682226585644 implements MigrationInterface {
    name = 'migrations1682226585644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`admin\` (\`id\` int NOT NULL AUTO_INCREMENT, \`password\` varchar(255) NOT NULL, \`firstname\` varchar(255) NULL, \`lastname\` varchar(255) NULL, \`sex\` varchar(255) NULL, \`speciality\` varchar(255) NULL, \`age\` int NULL, \`username\` varchar(200) NOT NULL, \`roles\` text NULL, \`isAccountDisabled\` tinyint NULL, \`email\` varchar(200) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`username\` (\`username\`), UNIQUE INDEX \`email\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`doctor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`password\` varchar(255) NOT NULL, \`firstname\` varchar(255) NULL, \`lastname\` varchar(255) NULL, \`sex\` varchar(255) NULL, \`speciality\` varchar(255) NULL, \`age\` int NULL, \`username\` varchar(200) NOT NULL, \`roles\` text NULL, \`isAccountDisabled\` tinyint NULL, \`email\` varchar(200) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`username\` (\`username\`), UNIQUE INDEX \`email\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`DoctorDuty\` (\`id\` int NOT NULL AUTO_INCREMENT, \`doctorId\` int NOT NULL, \`dutyDate\` datetime NOT NULL, \`startTime\` time NOT NULL, \`endTime\` time NOT NULL, \`appointmentDuration\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`password\` varchar(255) NOT NULL, \`firstname\` varchar(255) NULL, \`lastname\` varchar(255) NULL, \`sex\` varchar(255) NULL, \`age\` int NULL, \`phonenumber\` int NULL, \`emergencycontact\` int NULL, \`username\` varchar(200) NOT NULL, \`roles\` text NULL, \`isAccountDisabled\` tinyint NULL, \`email\` varchar(200) NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`username\` (\`username\`), UNIQUE INDEX \`email\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`email\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`username\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`DoctorDuty\``);
        await queryRunner.query(`DROP INDEX \`email\` ON \`doctor\``);
        await queryRunner.query(`DROP INDEX \`username\` ON \`doctor\``);
        await queryRunner.query(`DROP TABLE \`doctor\``);
        await queryRunner.query(`DROP INDEX \`email\` ON \`admin\``);
        await queryRunner.query(`DROP INDEX \`username\` ON \`admin\``);
        await queryRunner.query(`DROP TABLE \`admin\``);
    }

}
