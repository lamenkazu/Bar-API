const knex = require("../../../db");
const crypto = require("node:crypto");

module.exports = class UserAdminRepository {
  async create({ name, cpf, password, role }) {
    return await knex("users").insert({
      name,
      cpf,
      password,
      role,
    });
  }

  async userCpfIsOnDB(cpf) {
    return await knex("users").where({ cpf }).first();
  }
};
