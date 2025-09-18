import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema } from "yup";
import * as yup from "yup";


type Tproperty = "header" | "body" | "query" | "params";
type TGetSchema = <T>(schema: ObjectSchema<T>) => ObjectSchema<T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TAllschemas = Record<Tproperty, ObjectSchema<any>>

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllschemas>;

type Tvalidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: Tvalidation = (geTAllSchemas) => async (req, res, next) => {
  const schemas = geTAllSchemas(schema=> schema);
  const allErrors: Record<string, Record<string, string>> = {};
  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key], { abortEarly: false });
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