const knex = require("../../db");

module.exports = class SessionRepository {
  async findUser(cpf) {
    return await knex("users").where({ cpf }).first();
  }
};
