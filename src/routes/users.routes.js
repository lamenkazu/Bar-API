const { Router } = require("express");
const {
  ensureAuthentication,
  ensureAuthorization,
} = require("../middlewares/ensureAuth");

// Importar Controllers
const UserAdminController = require("../controllers/Users/UserAdminController");
const UserCommonController = require("../controllers/Users/UserCommonController");

// Importar middleware

const usersRoutes = Router();
const usersAdminRoutes = Router();

// Instanciar Controllers
const usersAdminController = new UserAdminController();
const usersCommonController = new UserCommonController();

// Rotas
usersRoutes.use(ensureAuthentication);

//Todos
usersRoutes.get("/validate", usersCommonController.validate); //Valida o usuário no sistema;
usersRoutes.put("/edit", usersCommonController.updateSelf); //Atualiza sua própria conta no sistema;
usersRoutes.get("/", usersCommonController.getYourself); //Atualiza sua própria conta no sistema;

//Admin
usersAdminRoutes.use(ensureAuthorization(["admin"]));

usersAdminRoutes.post("/admin", usersAdminController.create); //Cria uma nova conta no sistema; OK
usersAdminRoutes.get("/admin", usersAdminController.index); //Pega todas as contas do sistema;
usersAdminRoutes.get("/admin/:id", usersAdminController.show); //Pega uma conta do sistema para checar detalhes;
usersAdminRoutes.delete("/admin/:id", usersAdminController.delete); //Deleta um usuário do sistema;
usersAdminRoutes.put("/admin/edit/:id", usersAdminController.updateSome); //Altera os dados de algum usuário do sistema;

usersRoutes.use(usersAdminRoutes);

module.exports = usersRoutes;
