import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1626817597334 implements MigrationInterface {
    name = 'CreateUserTable1626817597334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("identity" uuid NOT NULL DEFAULT uuid_generate_v4(), "login" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "passwordHash" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_feed62e99fa47b221331fa53069" PRIMARY KEY ("identity"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
