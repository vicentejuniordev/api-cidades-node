import * as create from "./create-city";
import * as getAll from "./get-all";
import * as getById from "./getById";
import * as deleteById from "./deleteById";

export const citiesControllers = {
  ...create,
  ...getAll,
  ...getById,
  ...deleteById
};