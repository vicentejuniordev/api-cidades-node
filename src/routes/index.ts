import {Router} from "express";
import {StatusCodes} from "http-status-codes";
const router = Router();

router.get('/', (_, res)=>{
    return res.json({msg: "Olá Devs"});
});

router.post('/test', (req, res)=>{
  console.log(req.query.id);
  return res.status(StatusCodes.OK).json({msg: "Olá Devs"});
});

export {router};