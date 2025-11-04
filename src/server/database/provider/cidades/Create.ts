import KnexInstace from "../../knex";
import { ICidade } from "../../models";
import { ETableNames } from "../../ETableNames";

export const create = async (cidade: Omit<ICidade, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await KnexInstace(ETableNames.cidade).insert(cidade).returning('id');
    //Verifica qual o tipo de dado está no array, assim evitando conflitos entre o banco de produção e desenvolvimento
    if (typeof result === 'object') {
      return result.id;
    } else if (typeof result === 'number') {
      return result;
    }
    return new Error('Erro ao cadastrar cidade');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao cadastrar cidade');
  }
};