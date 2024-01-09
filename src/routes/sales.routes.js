const { Router } = require("express");

// Importar Controllers
const SalesAdminController = require("../controllers/Sales/SalesAdminController");
const SalesCommonController = require("../controllers/Sales/SalesCommonController");

// Importar middleware

const salesRoutes = Router();

// Instanciar Controllers
const salesAdminController = new SalesAdminController();
const salesCommonController = new SalesCommonController();

// Rotas

module.exports = salesRoutes;
