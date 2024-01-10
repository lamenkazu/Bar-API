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
    const { id } = req.user; // ID do usuário que está atualizando o produto no sistema
    const { name, price, category } = req.body; //Dados do produto a serem atualizados no sistema
    const { prod_id } = req.params;

    const productRepo = new ProductsAdminRepository();
    const productServices = new ProductsAdminServices(productRepo);

    await productServices.executeUpdate({
      userId: id,
      id: prod_id,
      name,
      price,
      category,
    });

    return res.json();
  }

  async delete(req, res) {
    const { prod_id } = req.params;

    const productRepo = new ProductsAdminRepository();
    const productServices = new ProductsAdminServices(productRepo);

    await productServices.executeDelete({ id: prod_id });

    return res.json();
  }
};
