const UserAdminRepository = require("../../repositories/User/UserAdminRepository");
const UserAdminServices = require("../../services/User/UserAdminServices");

module.exports = class UserAdminController {
  async create(req, res) {
    const { name, cpf, password, role } = req.body;

    const userRepo = new UserAdminRepository();
    const userServices = new UserAdminServices(userRepo);

    const newUserId = await userServices.executeCreate({
      name,
      cpf,
      password,
      role,
    });

    return res.status(201).json(newUserId);
  }

  async index(req, res) {
    const { name, cpf, role } = req.query;

    const userRepo = new UserAdminRepository();
    const userServices = new UserAdminServices(userRepo);

    const users = await userServices.executeIndex({
      name,
      cpf,
      role,
    });

    return res.json(users);
  }

  async show(req, res) {
    const { id } = req.params;

    const userAdminRepo = new UserAdminRepository();
    const userAdminServices = new UserAdminServices(userAdminRepo);

    const user = await userAdminServices.executeShow(id);

    return res.json(user);
  }

  async delete(req, res) {
    const { id } = req.params;

    const userAdminRepo = new UserAdminRepository();
    const userAdminServices = new UserAdminServices(userAdminRepo);

    await userAdminServices.executeDelete(id);

    return res.json();
  }

  async updateSome(req, res) {
    const { name, cpf, password, role } = req.body;
    const { id } = req.params;

    const userAdminRepo = new UserAdminRepository();
    const userAdminServices = new UserAdminServices(userAdminRepo);

    await userAdminServices.executeUpdateSome({
      id,
      name,
      cpf,
      password,
      role,
    });

    return res.json();
  }
};
