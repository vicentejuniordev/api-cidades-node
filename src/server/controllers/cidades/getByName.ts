import { Request, Response } from "express";
import { validation } from "../../shared/middlewares";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { getByNameProvider } from "../../database/provider/cidades/GetByName";

interface IParamProps{
  name?: string
}

export const getByIdValidation = validation((getSchema)=>({
  params: getSchema<IParamProps>(yup.object().shape({
    name: yup.string().required().min(3)
  }))
}));

export const getByName = async( req: Request<IParamProps>, res: Response) =>{
  const name = req.params.name;

  const data = await getByNameProvider(name);

  if(data instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error:{
        default: data.message
      }
    });
  }

  return res.status(StatusCodes.OK).send(data);
};