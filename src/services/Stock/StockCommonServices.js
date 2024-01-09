import { AppError } from "./../../utils/AppError.js";

export class StockCommonServices {
  constructor(stockRepo) {
    this.stockRepo = stockRepo;
  }
}
