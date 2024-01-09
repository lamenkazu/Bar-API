const AppError = require("../../utils/AppError");

module.exports = class UserCommonServices {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }
};
