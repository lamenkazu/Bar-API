const { Router } = require("express");

// Importar Controllers
const SalesController = require("../controllers/Sales/SalesController");

// Importar middleware
const {
  ensureAuthentication,
  ensureAuthorization,
} = require("../middlewares/ensureAuth");

// Instanciar Controllers
const salesController = new SalesController();

// Rotas
const salesRoutes = Router();

salesRoutes.use(ensureAuthentication);

//Todos
salesRoutes.post("/", salesController.create); //Criar um novo pedido de venda;
salesRoutes.get("/:order_id", salesController.show); //Visualizar detalhes de um pedido específico;
salesRoutes.put("/:order_id", salesController.update); //Atualizar um pedido existente;
salesRoutes.patch("/:order_id", salesController.finalizeOrder); //Finalizar um pedido como pago

module.exports = salesRoutes;
