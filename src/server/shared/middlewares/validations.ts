import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema } from "yup";
import * as yup from "yup";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Tvalidation = (field:"header"| "body" | "query" | "params",schema: ObjectSchema<any>) => RequestHandler;

export const validation: Tvalidation = (field, schema) => async (req, res, next) =>{
  try {
    await schema.validate(req[field], {abortEarly:false});
    next();
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const errors : Record<string, string> = {};

    yupError.inner.forEach(error=>{
      if(error.path === undefined) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({errors});

  }
};