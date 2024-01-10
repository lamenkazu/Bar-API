const SaleAdminRepository = require("../../repositories/Sale/SaleAdminRepository");
const SaleAdminServices = require("../../services/Sale/SaleAdminServices");

module.exports = class SalesAdminController {
  async create(req, res) {
    const { id } = req.user; // ID do usuário que está criando o produto no sistema
    const { name, price, category } = req.body; //Dados do produto a serem cadastrado no sistema

    const saleRepo = new SaleAdminRepository();
    const saleServices = new SaleAdminServices(saleRepo);

    await saleServices.executeCreate({
      userId: id,
      name,
      price,
      category,
    });

    return res.status(201).json();
  }

  async update(req, res) {
    return res.json();
  }

  async delete(req, res) {
    return res.json();
  }
};
