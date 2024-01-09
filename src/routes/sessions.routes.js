const { Router } = require("express");

// Importar Controllers
const SessionController = require("../controllers/SessionController");

// Importar middleware

const sessionsRoutes = Router();

// Instanciar Controllers
const sessionsController = new SessionController();

// Rotas
sessionsRoutes.post("/", sessionsController.create);

module.exports = sessionsRoutes;
