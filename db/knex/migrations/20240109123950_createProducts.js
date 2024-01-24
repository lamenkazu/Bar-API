exports.up = async (knex) => {
  await knex.schema.createTable("products", (table) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());

    table.text("name").notNullable();
    table.text("category").notNullable();
    table.decimal("price", 8, 2).notNullable();

    //Stock
    table.integer("quantity").notNullable().defaultTo(0); // Quantidade em estoque
    table.decimal("cost_price", 8, 2).notNullable().defaultTo(0); // Preço de custo por unidade
    table.decimal("selling_price", 8, 2).notNullable().defaultTo(0); // Preço de venda por unidade

    //Report
    table.integer("quantity_sold").notNullable().defaultTo(0); // Quantidade vendida
    table.decimal("total_sales", 8, 2).notNullable().defaultTo(0); // Valor total gerado pelas vendas do produto.
    table.decimal("net_profit", 8, 2).notNullable().defaultTo(0); //Lucro líquido gerado pelo produto

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
    table.uuid("created_by").references("id").inTable("users").notNullable();
    table.uuid("updated_by").references("id").inTable("users").notNullable();
  });

  const by = "44a08553-55f4-4e73-8b09-5ffebbbf8ef7";

  const beerProducts = [
    { name: "Heineken 600 ml", price: 15.0 },
    { name: "Heineken 330 ml", price: 9.0 },
    { name: "Brahma 600 ml", price: 9.0 },
    { name: "Skol 600 ml", price: 9.0 },
    { name: "Antartica 600 ml", price: 9.0 },
    { name: "Brahma latão 473 ml", price: 7.0 },
    { name: "Kaiser latão 473 ml", price: 6.0 },
    { name: "Amstel latão 473 ml", price: 8.0 },
    { name: "Outra 600 ml", price: 5.5 },
    { name: "Stella 600 ml", price: 13.0 },
  ];

  const sodaProducts = [
    { name: "Mini Coca Cola c/ açúcar 200 ml", price: 3.0 },
    { name: "Mini Coca Cola s/ açúcar 200 ml", price: 3.0 },
    { name: "Coca Cola KS  c/ açúcar 290 ml", price: 5.0 },
    { name: "Coca Cola kS  s/ açúcar 290 ml", price: 5.0 },
    { name: "Sukita Laranja 200 ml", price: 3.0 },
    { name: "Sukita Uva 200 ml", price: 3.0 },
    { name: "Guaraná Antartica 290 ml", price: 5.0 },
    { name: "Coca cola lata c/açúcar 350 ml", price: 6.0 },
    { name: "Coca cola lata s/açúcar 350 ml", price: 6.0 },
    { name: "Guaraná Antartica lata 350 ml", price: 6.0 },
    { name: "Soda KS 290 ml", price: 5.0 },
  ];

  const doseProducts = [
    { name: "Salinas dose", price: 8.0 },
    { name: "Old dose", price: 10.0 },
    { name: "Campari dose", price: 10.0 },
    { name: "Bacardi dose", price: 8.0 },
    { name: "Cachaça da roça dose", price: 3.0 },
    { name: "Seleta dose", price: 7.0 },
    { name: "51 dose", price: 4.0 },
    { name: "Cynar dose", price: 7.0 },
    { name: "Cachaça Ferreira dose", price: 7.0 },
    { name: "Conhaque de Alcatrão dose", price: 6.0 },
    { name: "Mineirinha dose", price: 7.0 },
    { name: "Engenho da cana dose", price: 7.0 },
    { name: "Guaraciaba dose", price: 4.0 },
    { name: "Vale verde dose", price: 10.0 },
    { name: "Presidente dose", price: 5.0 },
    { name: "Vodka Smirnoff dose", price: 6.0 },
    { name: "Villa Ouro dose", price: 4.0 },
    { name: "Black Label dose", price: 25.0 },
    { name: "Finlandia Vodka dose", price: 5.0 },
    { name: "Ypioka Cachaça dose", price: 5.0 },
    { name: "Para tudo dose", price: 5.0 },
    { name: "Cachaça decisão dose", price: 5.0 },
    { name: "Jurubeba dose", price: 6.0 },
    { name: "Catuaba dose", price: 5.0 },
    { name: "Cortesano dose", price: 5.0 },
  ];

  const cigaretteProducts = [
    { name: "Lucky Strike Azul maço", price: 8.0 },
    { name: "Lucky Strike Vermelho maço", price: 8.0 },
    { name: "Rothmans maço", price: 5.0 },
    { name: "Rothmans maço", price: 6.25 },
    { name: "Dunhill maço", price: 10.25 },
    { name: "Dunhill maço", price: 9.5 },
    { name: "Kent maço", price: 7.75 },
    { name: "Cigarro Unidade", price: 1.0 },
  ];

  const foodProducts = [
    { name: "Ovo codorna em conserva", price: 0.5 },
    { name: "Pastel carne", price: 2.5 },
    { name: "Pastel queijo", price: 2.5 },
    { name: "Linguiça porco unidade", price: 4.0 },
  ];

  const waterProducts = [
    { name: "Água da Flora c/ gás 510 ml", price: 3.0 },
    { name: "Agua da Flora s/ gás 510 ml", price: 2.5 },
  ];

  const coffeeProducts = [
    { name: "Café 200 ml", price: 2.5 },
    { name: "Cafezinho Pequeno 100ml", price: 1.5 },
  ];

  const sweetProducts = [
    { name: "Bala Halls", price: 2.5 },
    { name: "Chiclete Trident", price: 2.5 },
    { name: "Chiclete", price: 0.5 },
  ];

  await knex("products").insert(
    beerProducts.map((product) => ({
      ...product,
      category: "Cervejas",
      created_by: by,
      updated_by: by,
    }))
  );

  await knex("products").insert(
    sodaProducts.map((product) => ({
      ...product,
      category: "Refrigerantes",
      created_by: by,
      updated_by: by,
    }))
  );

  await knex("products").insert(
    doseProducts.map((product) => ({
      ...product,
      category: "Doses",
      created_by: by,
      updated_by: by,
    }))
  );

  await knex("products").insert(
    foodProducts.map((product) => ({
      ...product,
      category: "Aperitivos",
      created_by: by,
      updated_by: by,
    }))
  );

  await knex("products").insert(
    cigaretteProducts.map((product) => ({
      ...product,
      category: "Cigarros",
      created_by: by,
      updated_by: by,
    }))
  );

  await knex("products").insert(
    sweetProducts.map((product) => ({
      ...product,
      category: "Doces",
      created_by: by,
      updated_by: by,
    }))
  );

  await knex("products").insert(
    waterProducts.map((product) => ({
      ...product,
      category: "Água",
      created_by: by,
      updated_by: by,
    }))
  );

  await knex("products").insert(
    coffeeProducts.map((product) => ({
      ...product,
      category: "Café",
      created_by: by,
      updated_by: by,
    }))
  );

  await knex("products").insert({
    name: "Banheiro",
    price: 1.8,
    category: "Uso",
    created_by: by,
    updated_by: by,
  });
};

exports.down = (knex) => knex.schema.dropTable("products");
