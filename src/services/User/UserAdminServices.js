import { AppError } from "./../../utils/AppError.js";

export class UserAdminServices {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }
}
