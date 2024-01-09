const AppError = require("../../utils/AppError");

module.exports = class StockCommonServices {
  constructor(stockRepo) {
    this.stockRepo = stockRepo;
  }
};
