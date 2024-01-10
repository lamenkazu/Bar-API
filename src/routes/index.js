const { Router } = require("express");

const usersRoutes = require("./users.routes");
const sessionsRoutes = require("./sessions.routes");
const productsRoutes = require("./products.routes");
const salesRoutes = require("./sales.routes");
const stockRoutes = require("./stock.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/products", productsRoutes);
routes.use("/sales", salesRoutes);
routes.use("/stock", stockRoutes);

module.exports = routes;
