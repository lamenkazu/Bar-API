const { verify } = require("jsonwebtoken");
const { AppError } = require("../utils/AppError");
const { authConfig } = require("./../configs/auth");

const ensureAuthentication = (req, res, next) => {};

const ensureAuthorization = (roleToVerify) => {};

module.exports = { ensureAuthentication, ensureAuthorization };
