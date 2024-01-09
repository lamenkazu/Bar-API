exports.up = (knex) =>
  knex.schema.createTable("orders", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.text("user_id").references("id").inTable("users");

    table.jsonb("products").defaultTo([]);
    table.enum("method", ["credit_card", "debit_card", "cash"]);
    table.decimal("total", 8, 2).notNullable(); // 8 é o número total de dígitos e 2 é o número de casas decimais

    table.enum("status", ["open", "closed"]).defaultTo("open").notNullable();

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("orders");
