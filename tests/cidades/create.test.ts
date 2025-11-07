import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("test-create-controller", ()=>{
  it("create-test", async ()=>{
    //faz o post para o servidor usando o supertest
    const response1 = await testServer.post('/cidades').send({nome:'Barão de Grajaú'});
    const response2 = await testServer.post('/cidades').send({nome:'Floriano'});
    const response3 = await testServer.post('/cidades').send({nome:'Los Angeles'});
    const response4 = await testServer.post('/cidades').send({nome:'Boston'});
    //Verifica se a respota é igual a esperada
    expect(response1.statusCode).toEqual(StatusCodes.CREATED);
    expect(response2.statusCode).toEqual(StatusCodes.CREATED);
    expect(response3.statusCode).toEqual(StatusCodes.CREATED);
    expect(response4.statusCode).toEqual(StatusCodes.CREATED);
  });
});