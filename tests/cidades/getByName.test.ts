import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('get-by-name-test', ()=>{
  it('Pegar registro por nome', async ()=>{
    const created = await testServer.post('/cidades').send({nome:"Floriano", descricao: 'Cidade histórica no Piauí, famosa por seus festivais culturais e culinária típica.', areaTerritorial: 2300.0, pibPerCapita: 15000.00, idhm: 0.712, populacao: 60000});
    expect(created.statusCode).toEqual(StatusCodes.CREATED);
    const res = await testServer.get('/cidades/Floriano');
    
    expect(res.statusCode).toEqual(StatusCodes.OK);
  });

  it('busca registro que não existe', async ()=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const created = await testServer.post('/cidades').send({nome:"Floriano", descricao: 'Cidade histórica no Piauí, famosa por seus festivais culturais e culinária típica.', areaTerritorial: 2300.0, pibPerCapita: 15000.00, idhm: 0.712, populacao: 60000});
    const res = await testServer.get('/cidades/Floria');
    

    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res.body).toHaveProperty('error.default');
  });
});