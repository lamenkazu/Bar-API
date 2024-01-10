const knex = require("../../../db");

module.exports = class ProductsAdminRepository {
  async create({ userId, name, price, category }) {
    return await knex("products").insert({
      name,
      price,
      category,
      created_by: userId,
      updated_by: userId,
    });
  }

  async update({ userId, id, name, price, category }) {
    return await knex("products").where({ id }).update({
      name,
      price,
      category,
      updated_by: userId,
      updated_at: knex.fn.now(),
    });
  }

  async delete({ id }) {
    return await knex("products").where({ id }).first().delete();
  }
};
