import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { ICidade } from "../../database/models";

type IBodyProps = Omit<ICidade, 'id'>



export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(2)
  }))
}));


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

  console.log(req.body);
  return res.status(StatusCodes.CREATED).send("Não implementado");
};

