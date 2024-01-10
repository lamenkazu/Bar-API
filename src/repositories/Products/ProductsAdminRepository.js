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

  async update() {}

  async delete() {}
};
