import { Request, Response } from "express";


interface Icidade {
  nome: string
}



// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create =(req: Request<{},{},Icidade>, res: Response)=>{
  const data: Icidade = req.body;
  console.log(data);
  return res.send('Create!');
};

export const test ={};