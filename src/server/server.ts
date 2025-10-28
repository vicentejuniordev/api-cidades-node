import "./shared/services/yup-translation";
import express from 'express';
import { router } from './routes';
const server = express();
import 'dotenv/config';
server.use(express.json());
server.use(router);


export {
  server
};