const { Router } = require("express");

// Importar Controllers
const UserAdminController = require("../controllers/Users/UserAdminController");
const UserCommonController = require("../controllers/Users/UserCommonController");

// Importar middleware

const usersRoutes = Router();

// Instanciar Controllers
const usersAdminController = new UserAdminController();
const usersCommonController = new UserCommonController();

// Rotas

module.exports = usersRoutes;
