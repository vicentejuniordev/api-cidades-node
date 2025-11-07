import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('get-by-name-test', ()=>{
  it('Pegar registro por nome', async ()=>{
    const created = await testServer.post('/cidades').send({nome:"Floriano"});
    expect(created.statusCode).toEqual(StatusCodes.CREATED);
    const res = await testServer.get('/cidades/Floriano');
    
    expect(res.statusCode).toEqual(StatusCodes.OK);
  });

  it('busca registro que não existe', async ()=>{
    const res = await testServer.get('/cidades/Floria');

    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res.body).toHaveProperty('errors.default');
  });
});