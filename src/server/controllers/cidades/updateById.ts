import { Request, Response } from "express";
import { validation } from "../../shared/middlewares";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { ICidade } from "../../database/models";
import { updateByIdProvider } from "../../database/provider/cidades/UpdateById";


interface IParamProps{
  id?: number,
}

interface IBodyProps extends Omit<ICidade, 'id'>{
  nome: string
}

export const updateByIdValidation = validation((getSchema)=>({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3)
  })),
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
  }))
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res:Response ) =>{
  const update: ICidade = {id: req.params.id, nome:req.body.nome};

  const data = await updateByIdProvider(update);

  if(data instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error:{
        default: data.message
      }
    });
  }


  return res.status(StatusCodes.OK).json({message: 'Cidade atualizada com sucesso'});
};