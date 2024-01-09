import knex from "knex";
import { knexConfig } from "../knexfile.js";

export const connection = knex(knexConfig.development);
