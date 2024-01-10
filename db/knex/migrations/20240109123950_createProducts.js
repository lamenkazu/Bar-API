exports.up = (knex) =>
  knex.schema.createTable("products", (table) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());

    table.text("name").notNullable();
    table.decimal("price", 8, 2).notNullable(); // 8 é o número total de dígitos e 2 é o número de casas decimais
    table.text("category").notNullable();

    table.uuid("created_by").notNullable();
    table.uuid("updated_by").notNullable();

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("products");
