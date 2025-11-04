import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('getAll-controller-test', ()=>{
  it('get-all-test', async ()=>{

    const res = await testServer.post('/cidades').send({nome: 'Los Angeles',});

    expect(res.statusCode).toEqual(StatusCodes.CREATED);

    const resSearch = await testServer.get('/cidades');

    expect(Number(resSearch.header['x-total-count'])).toBeGreaterThan(0);
    expect(resSearch.statusCode).toEqual(StatusCodes.OK);
    expect(resSearch.body.length).toBeGreaterThan(0);


  });

});