const knex = require("../../../db");

module.exports = class UserCommonRepository {
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
};
