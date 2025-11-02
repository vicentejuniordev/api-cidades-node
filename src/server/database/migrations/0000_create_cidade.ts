import { Knex} from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex
   .schema
   .createTable('cidade', table =>{
     table.bigIncrements('id').primary().index(); // O index indica que vamos usar essa coluna para fazer consultas.
     table.string('nome', 150).index().notNullable();

     table.comment('Tabela de cidades');
   
    });
}


export async function down(knex: Knex): Promise<void> {
}

