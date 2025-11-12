import { Request, Response } from "express";
import { validation } from "../../shared/middlewares";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { ICidade } from "../../database/models";
import { updateByIdProvider } from "../../database/provider/cidades/UpdateById";


interface IParamProps {
  id?: number,
}

interface IBodyProps extends Omit<ICidade, 'id'> {
  nome: string
  descricao : string,
  areaTerritorial : number,
  pibPerCapita: number,
  idhm : number,
  populacao : number
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
    descricao: yup.string().required().min(10),
    areaTerritorial: yup.number().required(),
    pibPerCapita: yup.number().required(),
    idhm: yup.number().required(),
    populacao: yup.number().required()
  })),
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
  }))
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
  const update: ICidade = { id: req.params.id, nome: req.body.nome, descricao: req.body.descricao,areaTerritorial: req.body.areaTerritorial, pibPerCapita: req.body.pibPerCapita, idhm: req.body.idhm, populacao: req.body.populacao };

  const data = await updateByIdProvider(update);

  if (data instanceof Error) {
    return res.status(StatusCodes.NOT_FOUND).json({
      error: {
        default: data.message
      }
    });
  }


  return res.status(StatusCodes.OK).json({ message: 'Cidade atualizada com sucesso' });
};