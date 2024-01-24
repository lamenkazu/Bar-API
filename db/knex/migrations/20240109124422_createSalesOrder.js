exports.up = async (knex) => {
  await knex.schema.createTable("orders", (table) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());

    table.text("to");
    table.jsonb("products").defaultTo([]);
    table.decimal("total", 8, 2).notNullable(); // 8 é o número total de dígitos e 2 é o número de casas decimais
    table.enum("method", ["credit_card", "debit_card", "cash", "pix"]);
    table.enum("status", ["open", "closed"]).defaultTo("open").notNullable();

    table.timestamp("created_at").default(knex.fn.now());
    table.uuid("created_by").references("id").inTable("users").notNullable();

    table.timestamp("updated_at").default(knex.fn.now());
    table.uuid("updated_by").references("id").inTable("users").notNullable();
  });
};

exports.down = (knex) => knex.schema.dropTable("orders");
