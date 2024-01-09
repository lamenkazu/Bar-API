const knex = require("../../../db");

module.exports = class UserAdminRepository {
  async create({ name, cpf, password, role }) {
    return await knex("users").insert({
      name,
      cpf,
      password,
      role,
    });
  }

  async index({ name, cpf, role }) {
    return await knex("users")
      .whereLike("name", `%${name}%`)
      .andWhereLike("cpf", `%${cpf}%`)
      .andWhereLike("role", `%${role}%`)
      .orderBy("created_at");
  }

  async show(id) {
    return await knex("users").where({ id }).first();
  }

  async userCpfIsOnDB(cpf) {
    return await knex("users").where({ cpf }).first();
  }

  async delete(id) {
    return await knex("users").where({ id }).first().delete();
  }

  async update({ id, name, cpf, password, role }) {
    return await knex("users").where({ id }).update({
      name,
      cpf,
      password,
      role,
      updated_at: knex.fn.now(),
    });
  }
};
