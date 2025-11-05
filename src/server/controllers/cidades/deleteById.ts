import { Request, Response } from "express";
import { validation } from "../../shared/middlewares";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { deleteProvider } from "../../database/provider/cidades/Delete";

interface IParamProps{
  id?:number
}

export const deleteByIdValidation = validation((getSchema)=>({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().moreThan(0)
  }))
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) =>{
  const id = Number(req.params.id);

  const is_del = await deleteProvider(id);

  if(is_del instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors:{
        default: is_del.message
      }
    });
  }

  return res.status(StatusCodes.OK).json({message: "Cidade deletada..."});
};