import { server } from './server/server';

server.listen(process.env.PORT || 3333, ()=> {
    console.log(`Sever is running in port ${process.env.PORT || 3333}`);
});