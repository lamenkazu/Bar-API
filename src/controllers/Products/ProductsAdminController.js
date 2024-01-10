const ProductsAdminRepository = require("../../repositories/Products/ProductsAdminRepository");
const ProductsAdminServices = require("../../services/Products/ProductsAdminServices");

module.exports = class SalesAdminController {
  async create(req, res) {
    const { id } = req.user; // ID do usuário que está criando o produto no sistema
    const { name, price, category } = req.body; //Dados do produto a serem cadastrado no sistema

    const productRepo = new ProductsAdminRepository();
    const productServices = new ProductsAdminServices(productRepo);

    await productServices.executeCreate({
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
