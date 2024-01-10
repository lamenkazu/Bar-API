const { Router } = require("express");

// Importar Controllers
const ProductsAdminController = require("../controllers/Products/ProductsAdminController");
const ProductsCommonController = require("../controllers/Products/ProductsCommonController");

// Importar middleware
const {
  ensureAuthentication,
  ensureAuthorization,
} = require("../middlewares/ensureAuth");

// Instanciar Controllers
const productsAdminController = new ProductsAdminController();
const productsCommonController = new ProductsCommonController();

// Rotas
const productsRoutes = Router();
const productsAdminRoutes = Router();

productsRoutes.use(ensureAuthentication);

//Todos
productsRoutes.get("/", productsCommonController.index); //Lista todos os produtos
productsRoutes.get("/:prod_id", productsCommonController.show); //Mostra um único produto selecionado

//Admin
productsAdminRoutes.use(ensureAuthorization(["admin"]));

productsAdminRoutes.post("/admin", productsAdminController.create); //Cria um novo produto
productsAdminRoutes.put("/admin/:prod_id", productsAdminController.update); //Atualiza um produto existente
productsAdminRoutes.delete("/admin/:prod_id", productsAdminController.delete); //Deleta um produto existente

productsRoutes.use(productsAdminRoutes);

module.exports = productsRoutes;
