const AppError = require("../../utils/AppError");

module.exports = class ProductsCommonServices {
  constructor(productRepo) {
    this.productRepo = productRepo;
  }

  async executeIndex({ name, category }) {
    const it = this.productRepo;

    const products = await it.index({ name, category });
    if (!products) throw new AppError("Nenhum produto encontrado", 404);

    return products;
  }

  async executeShow({ id }) {
    const it = this.productRepo;

    const product = await it.show({ id });
    if (!product) throw new AppError("Nenhum produto encontrado", 404);

    return { product };
  }
};
