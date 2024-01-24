const AppError = require("../../utils/AppError");
const { hash } = require("bcryptjs");

module.exports = class UserAdminServices {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async executeCreate({ name, cpf, password, role, gender }) {
    const it = this.userRepo;

    if (await it.userCpfIsOnDB(cpf))
      throw new AppError("CPF ja existente no sistema");

    const encryptedPassword = await hash(password, 8);

    return await it.create({
      name,
      cpf,
      password: encryptedPassword,
      role,
      gender,
    });
  }

  async executeIndex({ name, cpf, role }) {
    const it = this.userRepo;

    const users = await it.index({
      name,
      cpf,
      role,
    });

    if (!users)
      throw new AppError(
        "Nenhum usuário não consta no banco de dados! Como chegou até aqui?",
        404
      );

    return users;
  }

  async executeShow(id) {
    const it = this.userRepo;

    const user = await it.show(id);
    if (!user) throw new AppError("Usuário não consta no banco de dados", 404);

    return user;
  }

  async executeDelete(id) {
    const it = this.userRepo;

    const deletedUser = await it.delete(id);

    if (!deletedUser)
      throw new AppError(
        "Usuário não consta no banco de dados, não pode ser removido.",
        404
      );

    return deletedUser;
  }

  async executeUpdateSome({ id, name, cpf, password, role }) {
    const it = this.userRepo;

    const encryptedPassword = await hash(password, 8);

    const updatedUser = await it.update({
      id,
      name,
      cpf,
      password: encryptedPassword,
      role,
    });

    if (!updatedUser)
      throw new AppError(
        "Usuário não consta no banco de dados, não pode ser atualizado.",
        404
      );

    return updatedUser;
  }
};
