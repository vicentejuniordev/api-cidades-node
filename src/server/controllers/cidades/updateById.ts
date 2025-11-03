import { Request, Response } from "express";
import { validation } from "../../shared/middlewares";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { ICidade } from "../../database/models";


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
  console.log(req.params);
  const id = Number(req.params.id);
  console.log(req.body);

  if(id > 3){
    return res.status(StatusCodes.NOT_FOUND).json({error:{default:'Registro não existe'}});

  }


  return res.status(StatusCodes.NO_CONTENT).send();
};