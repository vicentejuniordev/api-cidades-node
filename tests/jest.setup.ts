import supertest from "supertest";

import {server}from "../src/server/server";
import KnexInstace from "../src/server/database/knex";


beforeAll(async ()=>{
  await KnexInstace.migrate.latest();
});

afterAll(()=>{
  KnexInstace.destroy();
});


export const testServer = supertest(server);

