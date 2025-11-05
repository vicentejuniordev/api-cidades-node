import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getAllProvider } from "../../database/provider/cidades/Get-All";


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

  const data = await getAllProvider();

  if(data instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors:{
        default: data.message
      }
    });
  }

  return res.status(StatusCodes.OK).json(data);
};