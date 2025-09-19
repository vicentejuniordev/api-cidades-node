import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface Icidade {
  nome: string,
  estado: string
}



export const createValidation = validation((getSchema)=>({
  body: getSchema<Icidade>(yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(2)
  }))
}));




  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {

    console.log(req.body);
    return res.status(StatusCodes.CREATED).send("Não implementado");
  };

