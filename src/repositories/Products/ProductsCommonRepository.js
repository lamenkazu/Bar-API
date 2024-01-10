const knex = require("../../../db");

const selectQuery = [
  "products.id",
  "products.name",
  "products.price",
  "products.category",
  "users.name as created_by",
];

module.exports = class ProductsCommonRepository {
  async index({ name, category }) {
    const result = await knex("products")
      .select(
        "products.id",
        "products.name",
        "products.price",
        "products.category",
        "users.name as created_by"
      )
      .innerJoin("users", "products.created_by", "users.id")
      .whereLike("products.name", `%${name}%`)
      .andWhereLike("products.category", `%${category}%`)
      .orderBy("products.updated_at");

    return result;
  }

  async show({ id }) {
    return await knex("products")
      .select(selectQuery)
      .where({ "products.id": id })
      .innerJoin("users", "products.created_by", "users.id")
      .first();
  }
};
