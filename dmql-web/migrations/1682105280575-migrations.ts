import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1682105280575 implements MigrationInterface {
    name = 'migrations1682105280575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "password" character varying NOT NULL, "ethnicity" character varying, "race" character varying, "gender" character varying, "department" character varying, "age" integer, "username" character varying(200) NOT NULL, "roles" text, "isAccountDisabled" boolean, "email" character varying(200), "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), CONSTRAINT "username" UNIQUE ("username"), CONSTRAINT "email" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
