const AppError = require("../../utils/AppError");

module.exports = class UserAdminServices {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }
};
