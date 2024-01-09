import { AppError } from "./../../utils/AppError.js";

export class StockAdminServices {
  constructor(stockRepo) {
    this.stockRepo = stockRepo;
  }
}
