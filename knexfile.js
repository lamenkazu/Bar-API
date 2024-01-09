import path from "path";

export const knexfile = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "db", "database.db"),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb),
    },
    migrations: {
      directory: path.resolve(__dirname, "db", "knex", "migrations"),
    },
    useNullAsDefault: true,
  },
};
