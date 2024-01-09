const AppError = require("../../utils/AppError");

module.exports = class StockAdminServices {
  constructor(stockRepo) {
    this.stockRepo = stockRepo;
  }
};
