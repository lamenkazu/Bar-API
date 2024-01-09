exports.up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
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

  // Inserção de um usuário admin após criar a tabela
  await knex("users").insert({
    name: "admin",
    cpf: "admin",
    password: "admin",
    role: "admin",
  });
};

exports.down = (knex) => knex.schema.dropTable("users");
