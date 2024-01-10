const knex = require("../../../db");

module.exports = class UserCommonRepository {
  async validate(id) {
    return await knex("users").where({ id }).first();
  }

  async update({ id, name, password }) {
    return await knex("users").where({ id }).update({
      name,
      password,
      updated_at: knex.fn.now(),
    });
  }

  async getPassword(id) {
    const { password } = await knex("users")
      .select("password")
      .where({ id })
      .first();

    return password;
  }

  async getUserData(id) {
    return await knex("users").where({ id }).first();
  }
};
