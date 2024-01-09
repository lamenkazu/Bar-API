const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "db", "app.db"),
    },
    migrations: {
      directory: path.resolve(__dirname, "db", "knex", "migrations"),
    },
    useNullAsDefault: true,
  },
};
