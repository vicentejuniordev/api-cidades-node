import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('get-by-id-test', ()=>{
  it('Pegar registro por id', async ()=>{
    const res = await testServer.get('/cidades/3');
    
    expect(res.statusCode).toEqual(StatusCodes.OK);
  });

  it('busca registro que não existe', async ()=>{
    const res = await testServer.get('/cidades/2');

    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res.body).toHaveProperty('error.default');
  });
});