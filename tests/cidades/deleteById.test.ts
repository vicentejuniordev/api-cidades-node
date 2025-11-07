import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('delete-by-id-test',()=>{
  it('Apaga Registro',async ()=>{
    const created = await testServer.post('/cidades').send({nome : 'Floriano'});
    const res = await testServer.delete(`/cidades/${created.body.id}`);
    
    expect(res.statusCode).toEqual(StatusCodes.OK);
  });

  it("Apaga registro que não existe", async ()=>{
    const res = await testServer.delete('/cidades/8');

    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res.body).toHaveProperty('errors.default');
  });
});