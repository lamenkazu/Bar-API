import { AppError } from "./../../utils/AppError.js";

export class UserCommonServices {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }
}
