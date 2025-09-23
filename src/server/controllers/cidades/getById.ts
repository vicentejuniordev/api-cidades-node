import { Request, Response } from "express";
import { validation } from "../../shared/middlewares";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

interface IParamProps{
  id?: number
}

export const getByIdValidation = validation((getSchema)=>({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
  }))
}));

export const getById = async( req: Request<IParamProps>, res: Response) =>{
  const id = Number(req.params.id);

  console.log(req.params.id);
  if(id != 3){
    return res.status(StatusCodes.NOT_FOUND).json({error:{default:'registro não encontrado'}});
  }

  return res.status(StatusCodes.OK).send("Não implementado");
};