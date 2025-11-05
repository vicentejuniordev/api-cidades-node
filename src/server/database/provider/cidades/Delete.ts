import { ETableNames } from "../../ETableNames";
import KnexInstace from "../../knex";

export const deleteProvider = async(id : number) =>{
  try {
    const result = await KnexInstace(ETableNames.cidade).where("id", id).del();

    if(result != 1){
      return new Error('Cidade não cadastrada...');
    }else{
      return result;
    }
  } catch (error) {
    console.log(error);
    return new Error("Erro em consultar a tabela");
  }
};

