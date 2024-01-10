const { Router } = require("express");

// Importar Controllers
const SalesAdminController = require("../controllers/Sales/SalesAdminController");
const SalesCommonController = require("../controllers/Sales/SalesCommonController");

// Importar middleware
const {
  ensureAuthentication,
  ensureAuthorization,
} = require("../middlewares/ensureAuth");

// Instanciar Controllers
const salesAdminController = new SalesAdminController();
const salesCommonController = new SalesCommonController();

// Rotas
const salesRoutes = Router();
const salesAdminRoutes = Router();

salesRoutes.use(ensureAuthentication);

//Todos

//Admin
salesAdminRoutes.use(ensureAuthorization(["admin"]));

module.exports = salesRoutes;
