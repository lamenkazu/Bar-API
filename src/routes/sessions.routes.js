import { Router } from "express";

//Import Controllers
import { SessionController } from "../controllers/SessionController.js";

//Import middleware

const sessionsRoutes = Router();

//Instanciar Controllers
const sessionsController = new SessionController();

//Rotas

export { sessionsRoutes };
