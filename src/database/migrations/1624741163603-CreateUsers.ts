import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624741163603 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Digita esse código e insere Table no Import, depois passa as informações dentro de Table
        // O método up constrói a migration
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

        // O método down desconstrói a migration
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
