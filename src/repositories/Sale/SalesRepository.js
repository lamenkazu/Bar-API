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

  async show(id) {
    const order = await knex("orders")
      .select([
        "orders.id",
        "orders.products",
        "orders.total",
        "orders.method",
        "orders.status",
        "users_created.name as created_by",
        "users_updated.name as updated_by",
      ])
      .where({ "orders.id": id })
      .innerJoin(
        "users as users_created",
        "orders.created_by",
        "users_created.id"
      )
      .innerJoin(
        "users as users_updated",
        "orders.updated_by",
        "users_updated.id"
      )
      .first();

    return { ...order, products: JSON.parse(order.products) };
  }

  async update(req, res) {}

  async finalizeOrder(req, res) {}
};
