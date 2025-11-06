import * as create from "./create-city";
import * as getAll from "./get-all";
import * as getById from "./getByName";
import * as deleteById from "./deleteById";
import * as updateById from "./updateById";

export const citiesControllers = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById
};