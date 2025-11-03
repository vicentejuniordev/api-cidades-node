import { Knex} from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex): Promise<void> {
  return knex
   .schema
   .createTable('cidade', table =>{
     table.bigIncrements('id').primary().index(); // O index indica que vamos usar essa coluna para fazer consultas.
     table.string('nome', 150).index().notNullable();

     table.comment('Tabela que armazena informações de cidades');
   
    })
    .then(()=>{
      console.log(`# created table ${ETableNames.cidade}`);
    });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(`${ETableNames.cidade}`)
  .then(()=>{
    console.log(`# dropped table ${ETableNames.cidade}`);
  });
}

