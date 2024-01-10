const knex = require("../../../db");

module.exports = class SaleRepository {
  async create({ userId, products, total, method, status }) {
    return await knex("orders").insert({
      products: JSON.stringify(products),
      total,
      method,
      status: status || "open",
      created_by: userId,
      updated_by: userId,
    });
  }

  async show(req, res) {}

  async update(req, res) {}

  async finalizeOrder(req, res) {}
};
