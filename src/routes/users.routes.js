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

//Todos
usersRoutes.get("/validate", usersCommonController.validate); //Valida o usuário no sistema;
usersRoutes.put("/edit", usersCommonController.updateSelf); //Atualiza sua própria conta no sistema;
usersRoutes.get("/", usersCommonController.getYourself); //Atualiza sua própria conta no sistema;

//Admin
usersRoutes.post("/admin", usersAdminController.create); //Cria uma nova conta no sistema;
usersRoutes.get("/admin", usersAdminController.index); //Pega todas as contas do sistema;
usersRoutes.get("/admin/:id", usersAdminController.show); //Pega uma conta do sistema para checar detalhes;
usersRoutes.delete("/admin/:id", usersAdminController.delete); //Deleta um usuário do sistema;
usersRoutes.put("/admin/edit/:id", usersAdminController.updateSome); //Altera os dados de algum usuário do sistema;

module.exports = usersRoutes;
