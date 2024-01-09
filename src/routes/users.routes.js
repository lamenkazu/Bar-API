import { Router } from "express";

//Import Controllers
import { UserAdminController } from "../controllers/UserController/UserAdminController.js";
import { UserCommonController } from "../controllers/UserController/UserCommonController.js";

//Import middleware

const usersRoutes = Router();

//Instanciar Controllers
const usersAdminController = new UserAdminController();
const usersCommonController = new UserCommonController();

//Rotas

export { usersRoutes };
