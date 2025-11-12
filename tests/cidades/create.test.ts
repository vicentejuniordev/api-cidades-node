import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("test-create-controller", ()=>{
  it("create-test", async ()=>{
    //faz o post para o servidor usando o supertest
    const response1 = await testServer.post('/cidades').send({nome:'Barão de Grajaú', descricao: 'Cidade localizada no estado do Maranhão, conhecida por sua cultura rica e tradições.', areaTerritorial: 1500.5, pibPerCapita: 12000.75, idhm: 0.689, populacao: 45000});
    const response2 = await testServer.post('/cidades').send({nome:'Floriano', descricao: 'Cidade histórica no Piauí, famosa por seus festivais culturais e culinária típica.', areaTerritorial: 2300.0, pibPerCapita: 15000.00, idhm: 0.712, populacao: 60000});
    const response3 = await testServer.post('/cidades').send({nome:'Los Angeles', descricao: 'Cidade vibrante na Califórnia, conhecida por sua indústria cinematográfica e diversidade cultural.', areaTerritorial: 1302.0, pibPerCapita: 65000.50, idhm: 0.885, populacao: 4000000});
    const response4 = await testServer.post('/cidades').send({nome:'Boston', descricao: 'Cidade histórica em Massachusetts, famosa por suas universidades de renome e rica herança colonial.', areaTerritorial: 232.1, pibPerCapita: 70000.25, idhm: 0.920, populacao: 692600});
    //Verifica se a respota é igual a esperada
    expect(response1.statusCode).toEqual(StatusCodes.CREATED);
    expect(response2.statusCode).toEqual(StatusCodes.CREATED);
    expect(response3.statusCode).toEqual(StatusCodes.CREATED);
    expect(response4.statusCode).toEqual(StatusCodes.CREATED);
  });
});