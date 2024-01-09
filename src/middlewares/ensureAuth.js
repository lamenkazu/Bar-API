import { verify } from "jsonwebtoken";
import { AppError } from "../utils/AppError";
import { authConfig } from "./../configs/auth";

const ensureAuthentication = (req, res, next) => {};

const ensureAuthorization = (roleToVerify) => {};

export { ensureAuthentication, ensureAuthorization };
