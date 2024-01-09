const AppError = require("../../utils/AppError");

module.exports = class SaleAdminServices {
  constructor(saleRepo) {
    this.saleRepo = saleRepo;
  }
};
