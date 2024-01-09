import { AppError } from "./../../utils/AppError.js";

export class SaleAdminServices {
  constructor(saleRepo) {
    this.saleRepo = saleRepo;
  }
}
