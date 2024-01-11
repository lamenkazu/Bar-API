const knex = require("../../../db");

const selectQuery = [
  "products.id",
  "products.name",
  "products.price",
  "products.category",
  "users_created.name as created_by",
  "users_updated.name as updated_by",
];

module.exports = class ProductsCommonRepository {
  async index({ name, category }) {
    const result = await knex("products")
      .select(selectQuery)
      .innerJoin(
        "users as users_created",
        "products.created_by",
        "users_created.id"
      )
      .innerJoin(
        "users as users_updated",
        "products.updated_by",
        "users_updated.id"
      )
      .whereLike("products.name", `%${name}%`)
      .andWhereLike("products.category", `%${category}%`)
      .orderBy("products.updated_at");

    return result;
  }

  async show({ id }) {
    return await knex("products")
      .select(selectQuery)
      .where({ "products.id": id })
      .innerJoin(
        "users as users_created",
        "products.created_by",
        "users_created.id"
      )
      .innerJoin(
        "users as users_updated",
        "products.updated_by",
        "users_updated.id"
      )
      .first();
  }
};
