import {Router} from "express";
//import {StatusCodes} from "http-status-codes";
import "dotenv/config";
import {citiesControllers} from "../controllers";
const router = Router();

router.get('/', (_, res)=>{
    return res.json({msg: "Olá Devs"});
});

router.post('/cidades', citiesControllers.createValidation, citiesControllers.create);

export {router};