import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface Icidade {
  nome: string,
  estado: string
}

const bodyValidation: yup.ObjectSchema<Icidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(2)
});
//Middleware de validação dos dados, podemos usar não só para o body, mas sim para header,query e etc.
export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {

    await bodyValidation.validate(req.body, { abortEarly: false }) as Icidade;
    return next(); //O next é usado para passar para o proximo middleware ou controller.
  } catch (error) {

    const yupError = error as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors
    });


  };

};


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {

  console.log(req.body);
  return res.status(StatusCodes.OK).send("Create");
};

