const AppError = require("../utils/AppError");

module.exports = class SessionService {
  constructor(sessionRepo) {
    this.sessionRepo = sessionRepo;
  }
};
