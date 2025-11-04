import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("test-create-controller", ()=>{
  it("create-test", async ()=>{
    //faz o post para o servidor usando o supertest
    const response1 = await testServer.post('/cidades').send({nome:'Barão de Grajaú'});
    //Verifica se a respota é igual a esperada
    expect(response1.statusCode).toEqual(StatusCodes.CREATED);
  
  });
});