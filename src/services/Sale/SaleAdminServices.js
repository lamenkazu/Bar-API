const AppError = require("../../utils/AppError");

module.exports = class SaleAdminServices {
  constructor(saleRepo) {
    this.saleRepo = saleRepo;
  }

  async executeCreate({ userId, name, price, category }) {
    const it = this.saleRepo;

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
