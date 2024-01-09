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

  async index(req, res) {}

  async show(req, res) {}

  async delete(req, res) {}

  async updateSome(req, res) {}
};
