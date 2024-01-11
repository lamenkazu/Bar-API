const { Router } = require("express");

// Importar Controllers
const SalesController = require("../controllers/Sales/SalesController");
const SalesAdminController = require("../controllers/Sales/SalesAdminController");

// Importar middleware
const {
  ensureAuthentication,
  ensureAuthorization,
} = require("../middlewares/ensureAuth");

// Instanciar Controllers
const salesController = new SalesController();
const salesAdminController = new SalesAdminController();

// Rotas
const salesRoutes = Router();
const salesAdminRoutes = Router();

salesRoutes.use(ensureAuthentication);

//Admin
salesAdminRoutes.use(ensureAuthorization(["admin"]));
salesRoutes.use(salesAdminRoutes);

salesAdminRoutes.get("/admin", salesAdminController.index); //Lista todos os pdidos de venda;
salesAdminRoutes.get("/admin/closed", salesAdminController.getClosedOrders); //Lista todos os pedidos de venda já fechados;

//Todos
salesRoutes.get("/open", salesController.getOpenOrders); //Atualizar um pedido existente;
salesRoutes.post("/", salesController.create); //Criar um novo pedido de venda;
salesRoutes.get("/:id", salesController.show); //Visualizar detalhes de um pedido específico;
salesRoutes.put("/:order_id", salesController.update); //Atualizar um pedido existente;
salesRoutes.patch("/:order_id", salesController.finalizeOrder); //Finalizar um pedido como pago;

module.exports = salesRoutes;
