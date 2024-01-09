const AppError = require("../../utils/AppError");

module.exports = class SaleCommonServices {
  constructor(saleRepo) {
    this.saleRepo = saleRepo;
  }
};
