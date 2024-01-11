const knex = require("../../../db");

const selectQuery = [
  "orders.id",
  "orders.products",
  "orders.total",
  "orders.method",
  "orders.status",
  "users_created.name as created_by",
  "users_updated.name as updated_by",
];

module.exports = class SaleRepository {
  async create({ userId, products, total, method }) {
    return await knex("orders").insert({
      products: JSON.stringify(products),
      total,
      method,
      created_by: userId,
      updated_by: userId,
    });
  }

  async show(id) {
    const order = await knex("orders")
      .select(selectQuery)
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

  async update({ userId, orderId, products, total, method }) {
    return await knex("orders")
      .where({ id: orderId })
      .update({
        products: JSON.stringify(products),
        total,
        method,
        updated_by: userId,
      });
  }

  async finalizeOrder(req, res) {}

  async getOpenOrders() {
    const openOrders = await knex("orders")
      .select(selectQuery)
      .where({ status: "open" })
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
      .orderBy("orders.updated_at");

    openOrders.forEach((order) => {
      order.products = JSON.parse(order.products);
    });

    return openOrders;
  }
};
