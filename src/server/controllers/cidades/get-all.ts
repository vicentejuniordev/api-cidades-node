import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


interface IQueryParams {
  page?: number,
  limit?: number,
  filter?: string
}

export const getAllValidation = validation((getSchema)=>({
  query: getSchema<IQueryParams>(yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional()
  }))
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const getAll = async (req: Request<{},{},{}, IQueryParams>, res: Response) =>{
  res.setHeader('access-control-expose-headers', 'x-total-count');
  res.setHeader('x-total-count', 1);

  return res.status(StatusCodes.OK).json([{id: 1, nome: 'Floriano'}]);
};