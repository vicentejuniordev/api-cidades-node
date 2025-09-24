import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('delete-by-id-test',()=>{
  it('Apaga Registro',async ()=>{
    const res = await testServer.delete('/cidades/2');
    
    expect(res.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it("Apaga registro que não exite", async ()=>{
    const res = await testServer.delete('/cidades/8');

    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res.body).toHaveProperty('erros.default');
  });
});