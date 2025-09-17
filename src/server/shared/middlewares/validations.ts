import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema } from "yup";
import * as yup from "yup";


type Tproperty = "header" | "body" | "query" | "params";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TAllschemas = Record<Tproperty, ObjectSchema<any>>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Tvalidation = (schema: Partial<TAllschemas>) => RequestHandler;

export const validation: Tvalidation = (schemas) => async (req, res, next) => {
  const allErrors: Record<string, Record<string, string>> = {};
  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key], { abortEarly: false });
      next();
    } catch (error) {
      const yupError = error as yup.ValidationError;
      const errors: Record<string, string> = {};

      yupError.inner.forEach(error => {
        if (error.path === undefined) return;
        errors[error.path] = error.message;
      });

      allErrors[key]= errors;

    }
  });

  if(Object.entries(allErrors).length === 0){
    return next();
  }else{
    return res.status(StatusCodes.BAD_REQUEST).json({ allErrors });
  }
};