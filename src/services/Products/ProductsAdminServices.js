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

  async executeUpdate() {}

  async executeDelete() {}
};
