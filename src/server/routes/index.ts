import {Router} from "express";
//import {StatusCodes} from "http-status-codes";
import "dotenv/config";
import {citiesControllers} from "../controllers";
const router = Router();

router.get('/', (_, res)=>{
    return res.json({msg: "Olá Devs"});
});
router.get('/cidades', citiesControllers.getAllValidation, citiesControllers.getAll);
router.get('/cidades/:id', citiesControllers.getByIdValidation, citiesControllers.getById);
router.post('/cidades', citiesControllers.createValidation, citiesControllers.create);
router.delete('/cidades/:id', citiesControllers.deleteByIdValidation, citiesControllers.deleteById);

export {router};