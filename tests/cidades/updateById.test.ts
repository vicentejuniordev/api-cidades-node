import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('test-update-by-id',()=>{
  it('atualiza registro', async ()=>{
    const created = await testServer.post('/cidades').send({nome:'Floriano', descricao: 'Cidade histórica no Piauí, famosa por seus festivais culturais e culinária típica.', areaTerritorial: 2300.0, pibPerCapita: 15000.00, idhm: 0.712, populacao: 60000});
    const res = await testServer.put(`/cidades/${created.body.id}`).send({nome:'Floriano', descricao: 'Cidade histórica no Piauí, famosa por seus festivais culturais e culinária típica.', areaTerritorial: 2300.0, pibPerCapita: 15000.00, idhm: 0.712, populacao: 60000});

    expect(res.statusCode).toEqual(StatusCodes.OK);
  });

  it('tenta atualizar registro que não existe', async ()=>{
    const res = await testServer.put('/cidades/7').send({nome:'floriano', descricao: 'Cidade histórica no Piauí, famosa por seus festivais culturais e culinária típica.', areaTerritorial: 2300.0, pibPerCapita: 15000.00, idhm: 0.712, populacao: 60000});

    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res.body).toHaveProperty('error.default');
  });
});