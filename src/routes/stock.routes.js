import { Router } from "express";

//Import Controllers
import { StockAdminController } from "./../controllers/StockController/StockAdminController.js";
import { StockCommonController } from "./../controllers/StockController/StockCommonController.js";

//Import middleware

const stockRoutes = Router();

//Instanciar Controllers
const stockAdminController = new StockAdminController();
const stockCommonController = new StockCommonController();

export { stockRoutes };
