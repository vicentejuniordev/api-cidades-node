import * as create from "./create-city";
import * as getAll from "./get-all";

export const citiesControllers = {
  ...create,
  ...getAll
};