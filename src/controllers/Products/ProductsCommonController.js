const SaleCommonRepository = require("../../repositories/Products/ProductsCommonRepository");
const SaleCommonServices = require("../../services/Products/ProductsCommonServices");

module.exports = class SalesCommonController {
  async index(req, res) {
    const { name, category } = req.query;

    const productRepo = new SaleCommonRepository();
    const productServices = new SaleCommonServices(productRepo);

    const products = await productServices.executeIndex({ name, category });

    return res.json(products);
  }

  async show(req, res) {
    const { prod_id } = req.params;

    const productRepo = new SaleCommonRepository();
    const productServices = new SaleCommonServices(productRepo);

    const product = await productServices.executeShow({ id: prod_id });

    return res.json(product);
  }
};
