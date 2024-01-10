const AppError = require("../../utils/AppError");

module.exports = class ProductsAdminServices {
  constructor(productRepo) {
    this.productRepo = productRepo;
  }

  async executeCreate({ userId, name, price, category }) {
    const it = this.productRepo;

    return it.create({
      userId,
      name,
      price,
      category,
    });
  }

  async executeUpdate({ userId, id, name, price, category }) {
    const it = this.productRepo;

    const product = await it.update({
      userId,
      id,
      name,
      price,
      category,
    });

    if (!product)
      throw new AppError("Produto não encontrado, não houve atualização", 404);

    return product;
  }

  async executeDelete({ id }) {
    const it = this.productRepo;

    const deletedProduct = await it.delete({ id });

    if (!deletedProduct)
      throw new AppError("Produto não encontrado, nada foi deletado", 404);

    return deletedProduct;
  }
};
