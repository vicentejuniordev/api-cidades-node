import { ETableNames } from "../../ETableNames";
import KnexInstace from "../../knex";

export const getByNameProvider = async (name: string) =>{
  try {
    const result = await KnexInstace(ETableNames.cidade).select('*').where('nome', name);

    if(result.length === 0){
      return new Error('Cidade não encontrada...');
    }else{
      return result;
    }
  } catch (error) {
    console.log(error);
    return new Error('Falha ao consultar tabela...');
  }
};
