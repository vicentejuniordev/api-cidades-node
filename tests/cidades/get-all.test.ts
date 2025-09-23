import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('getAll-controller-test', ()=>{
  it('get-all-test', async ()=>{

    const res = await testServer.get('/cidades');

    expect(res.statusCode).toEqual(StatusCodes.OK);

  });

});