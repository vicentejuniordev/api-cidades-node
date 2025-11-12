import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('delete-by-id-test',()=>{
  it('Apaga Registro',async ()=>{
    const created = await testServer.post('/cidades').send({nome : 'Floriano', descricao: 'Cidade histórica no Piauí, famosa por seus festivais culturais e culinária típica.', areaTerritorial: 2300.0, pibPerCapita: 15000.00, idhm: 0.712, populacao: 60000});
    const res = await testServer.delete(`/cidades/${created.body.id}`);
    
    expect(res.statusCode).toEqual(StatusCodes.OK);
  });

  it("Apaga registro que não existe", async ()=>{
    const res = await testServer.delete('/cidades/8');

    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res.body).toHaveProperty('errors.default');
  });
});