import {MigrationInterface, QueryRunner, Table} from "typeorm";
export class CreateUser1638351707292 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'users',
                columns:[
                    {
                        name:'id',
                        type:'varchar',
                    },
                    {
                        name:'name',
                        type:'varchar',
                    },
                    {
                        name:'password',
                        type:'varchar',
                    },
                    {
                        name:'email',
                        type:'varchar',
                    },
                    {
                        name:'level',
                        type:'varchar',
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:'now()',
                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
