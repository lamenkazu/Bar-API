const AppError = require("../../utils/AppError");

module.exports = class SaleServices {
  constructor(saleRepo) {
    this.saleRepo = saleRepo;
  }

  async executeCreate() {}

  async executeShow() {}

  async executeUpdate() {}

  async executeFinalizeOrder() {}
};
