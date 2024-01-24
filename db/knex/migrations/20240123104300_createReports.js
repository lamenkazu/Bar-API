exports.up = async (knex) => {
  await knex.schema.createTable("sales_reports", (table) => {
    table.uuid("id").primary().notNullable();

    table.text("top_category").notNullable();
    table.integer("total_orders").notNullable().defaultTo(0);
    table.enum("preferred_payment_method", [
      "credit_card",
      "debit_card",
      "cash",
      "pix",
    ]);

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
};

exports.down = (knex) => knex.schema.dropTable("sales_reports");
