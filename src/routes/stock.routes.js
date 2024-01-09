const { Router } = require("express");

// Importar Controllers
const StockAdminController = require("../controllers/Stock/StockAdminController");
const StockCommonController = require("../controllers/Stock/StockCommonController");

// Importar middleware

const stockRoutes = Router();

// Instanciar Controllers
const stockAdminController = new StockAdminController();
const stockCommonController = new StockCommonController();

module.exports = stockRoutes;
