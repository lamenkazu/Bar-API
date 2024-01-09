const AppError = require("../../utils/AppError");
const { hash } = require("bcryptjs");

module.exports = class UserAdminServices {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async executeCreate({ name, cpf, password, role }) {
    const it = this.userRepo;

    if (await it.userCpfIsOnDB(cpf))
      throw new AppError("CPF ja existente no sistema");

    const encryptedPassword = await hash(password, 8);

    return await it.create({
      name,
      cpf,
      password: encryptedPassword,
      role,
    });
  }
};
