import { ICidade } from "../../models";
import KnexInstace from "../../knex";
import { ETableNames } from "../../ETableNames";


export const updateByIdProvider = async (update: ICidade) =>{
  try {
    const result = await KnexInstace(ETableNames.cidade).update({nome: update.nome}).where('id', update.id);
    if(result === 0){
      return new Error('Erro ao atualiza, cidade não encontrada');
    }

    return result;
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar tabela');
  }
};
