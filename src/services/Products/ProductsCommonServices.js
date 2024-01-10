const AppError = require("../../utils/AppError");

module.exports = class ProductsCommonServices {
  constructor(productRepo) {
    this.productRepo = productRepo;
  }
};
