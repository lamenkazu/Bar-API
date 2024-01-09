import { Router } from "express";

//Import Controllers
import { SalesAdminController } from "./../controllers/SalesController/SalesAdminController.js";
import { SalesCommonController } from "./../controllers/SalesController/SalesCommonController.js";

//Import middleware

const salesRoutes = Router();

//Instanciar Controllers
const salesAdminController = new SalesAdminController();
const salesCommonController = new SalesCommonController();

//Rotas

export { salesRoutes };
