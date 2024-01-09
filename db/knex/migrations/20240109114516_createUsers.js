exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.text("name").notNullable();
    table.text("cpf").notNullable();
    table.text("password").notNullable();

    table
      .enum("role", ["admin", "common"], {
        useNative: true,
        enumName: "roles",
      })
      .notNullable()
      .default("common");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("users");
