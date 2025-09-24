import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('test-update-by-id',()=>{
  it('atualiza registro', async ()=>{
    const res = await testServer.put('/cidades/3').send({nome:'Floriano'});

    expect(res.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('tenta atualizar registro que não existe', async ()=>{
    const res = await testServer.put('/cidades/4').send({nome:'floriano'});

    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res.body).toHaveProperty('error.default');
  });
});