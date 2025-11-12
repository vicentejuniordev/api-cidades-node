import KnexInstace from './server/database/knex';
import { server } from './server/server';

const startServer = () =>{
  server.listen(process.env.PORT || 3333, ()=> {
    console.log(`Server is running in port ${process.env.PORT || 3333}`);
});
};

if(process.env.IS_LOCALHOST != 'true'){
  KnexInstace.migrate.latest().then(()=>{
    startServer();
  }).catch(console.log);
}else{
  startServer();
};