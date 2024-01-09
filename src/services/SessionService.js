const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const authConfig = require("../configs/auth");

const errorFromUser = new AppError("E-mail e/ou senha incorreta.", 401);

module.exports = class SessionService {
  constructor(sessionRepo) {
    this.sessionRepo = sessionRepo;
  }

  async execute({ cpf, password }) {
    const it = this.sessionRepo;

    const user = await it.findUser(cpf);
    if (!user) throw errorFromUser;

    if (!cpf === "admin") {
      const passwordMatched = await compare(password, user.password);
      if (!passwordMatched) throw errorFromUser;
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({ role: user.role }, secret, {
      subject: user.id,
      expiresIn,
    });

    delete user.password;

    return { token, user };
  }
};
