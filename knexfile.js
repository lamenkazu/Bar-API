module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      // filename: path.resolve(__dirname, "db", "database.db"),
      filename: "./db/app.db",
    },
    migrations: {
      directory: "./db/knex/migrations",
    },
    useNullAsDefault: true,
  },
};
