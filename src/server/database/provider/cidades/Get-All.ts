import { ETableNames } from "../../ETableNames";
import KnexInstace from "../../knex";

export const getAllProvider = async() =>{
  try {
    const data = await KnexInstace(ETableNames.cidade).select("*");
    if(!data){
      return new Error("Tabela sem dados...");
    }else{
      return data;
    }
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar tabela");
  }
};
