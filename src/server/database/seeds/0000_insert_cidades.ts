import { Knex } from "knex";
import { ETableNames } from "../ETableNames";
import { ICidade } from "../models";



export const seed = async (knex: Knex) =>{
  const [{count}] = await knex(ETableNames.cidade).count<[{count : number}]>('* as count');

  if(!Number.isInteger(count) || Number(count) > 0) return;

  const cidadesToInsert = cidades.map((c)=> c);

  await knex(ETableNames).insert(cidadesToInsert);

};


const cidades: Omit<ICidade, 'id'>[] = [
  {
    nome: "Teresina",
    descricao: "Capital do Piauí; centro administrativo e econômico do estado.",
    areaTerritorial: 864.082,
    pibPerCapita: 27430.28,
    idhm: 0.754,
    populacao: 902644
  },
  {
    nome: "Parnaíba",
    descricao: "Segunda maior cidade do estado; importante por ser cidade litorânea.",
    areaTerritorial: 645.83,
    pibPerCapita: 19296.04,
    idhm: 0.708,
    populacao: 162159
  },
  {
    nome: "Picos",
    descricao: "Polo regional do agreste piauiense; forte comércio e serviços.",
    areaTerritorial: 3306.0,
    pibPerCapita: 24676.75,
    idhm: 0.698,
    populacao: 78332
  },
  {
    nome: "Piripiri",
    descricao: "Cidade do norte do estado, com atividade agropecuária e comércio.",
    areaTerritorial: 1036.0,
    pibPerCapita: 14362.92,
    idhm: 0.667,
    populacao: 65538
  },
  {
    nome: "Floriano",
    descricao: "Importante cidade do sul/pirenópolis do Piauí; tradição cultural.",
    areaTerritorial: 3407.979,
    pibPerCapita: 24441.02,
    idhm: 0.700,
    populacao: 62036
  },
  {
    nome: "São Raimundo Nonato",
    descricao: "Sede de parte do Parque Nacional Serra da Capivara (patrimônio).",
    areaTerritorial: 2415.287,
    pibPerCapita: 16160.36,
    idhm: 0.661,
    populacao: 38934
  },
  {
    nome: "Corrente",
    descricao: "Município no extremo-sul do estado; economia mista.",
    areaTerritorial: 2435.0,
    pibPerCapita: 25426.51,
    idhm: 0.642,
    populacao: 26000
  },
  {
    nome: "Campo Maior",
    descricao: "Cidade histórica; polo da Região dos Carnaubais.",
    areaTerritorial: 1555.0,
    pibPerCapita: 15034.35,
    idhm: 0.684,
    populacao: 81356
  },
  {
    nome: "Oeiras",
    descricao: "Cidade histórica (uma das mais antigas do estado); patrimônio cultural.",
    areaTerritorial: 2323.0,
    pibPerCapita: 10234.00,
    idhm: 0.683,
    populacao: 35200
  },
  {
    nome: "Bom Jesus",
    descricao: "Município do sul do estado; turismo ligado a natureza e eventos.",
    areaTerritorial: 1223.0,
    pibPerCapita: 11800.00,
    idhm: 0.659,
    populacao: 34500
  },
  {
    nome: "Luís Correia",
    descricao: "Município litorâneo; turismo e serviços ligados ao litoral piauiense.",
    areaTerritorial: 797.0,
    pibPerCapita: 13500.00,
    idhm: 0.682,
    populacao: 35000
  },
  {
    nome: "José de Freitas",
    descricao: "Próximo à capital; crescimento por proximidade com Teresina.",
    areaTerritorial: 513.0,
    pibPerCapita: 11200.00,
    idhm: 0.696,
    populacao: 47000
  },
  {
    nome: "Altos",
    descricao: "Cidade próxima a Teresina, parte da área metropolitana.",
    areaTerritorial: 166.0,
    pibPerCapita: 9800.00,
    idhm: 0.678,
    populacao: 53200
  },
  {
    nome: "União",
    descricao: "Município pequeno próximo à Teresina; comércio local ativo.",
    areaTerritorial: 536.0,
    pibPerCapita: 9300.00,
    idhm: 0.629,
    populacao: 26000
  },
  {
    nome: "Pedro II",
    descricao: "Conhecida por suas fontes e turismo interiorano.",
    areaTerritorial: 428.0,
    pibPerCapita: 9800.00,
    idhm: 0.643,
    populacao: 18800
  },
  {
    nome: "Valença do Piauí",
    descricao: "Polo regional com comércio e serviços para municípios vizinhos.",
    areaTerritorial: 1600.0,
    pibPerCapita: 8900.00,
    idhm: 0.639,
    populacao: 41500
  },
  {
    nome: "Miguel Alves",
    descricao: "Município com agricultura e proximidade a polos maiores.",
    areaTerritorial: 201.0,
    pibPerCapita: 8100.00,
    idhm: 0.632,
    populacao: 10000
  },
  {
    nome: "Buriti dos Lopes",
    descricao: "Município do norte piauiense com forte atividade agropecuária.",
    areaTerritorial: 835.0,
    pibPerCapita: 7600.00,
    idhm: 0.640,
    populacao: 15500
  },
  {
    nome: "Paulistana",
    descricao: "Cidade do sudeste do estado; importância regional.",
    areaTerritorial: 2840.0,
    pibPerCapita: 9300.00,
    idhm: 0.616,
    populacao: 35300
  }
];
