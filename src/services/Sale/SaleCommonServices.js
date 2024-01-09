import { AppError } from "./../../utils/AppError.js";

export class SaleCommonServices {
  constructor(saleRepo) {
    this.saleRepo = saleRepo;
  }
}
