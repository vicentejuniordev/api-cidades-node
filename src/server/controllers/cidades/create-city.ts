import { Request, Response } from "express";
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


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create =async (req: Request<{},{},Icidade>, res: Response)=>{
 let validated: Icidade | undefined = undefined;
 try{

  validated = await bodyValidation.validate(req.body, {abortEarly:false}) as Icidade;
 
}catch(error){
 
  const yupError = error as yup.ValidationError;
  const errors: Record<string,string> ={};

  yupError.inner.forEach(error=>{
    if(error.path === undefined) return;
    errors[error.path]= error.message;
  });

  return res.status(StatusCodes.BAD_REQUEST).json({errors
  });

  
 };

 console.log(validated);
 return res.status(StatusCodes.OK).send("Create");
};

export const test ={};