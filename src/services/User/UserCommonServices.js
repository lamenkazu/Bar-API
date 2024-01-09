const AppError = require("../../utils/AppError");
const { hash, compare } = require("bcryptjs");

module.exports = class UserCommonServices {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async executeUpdateSelf({ id, name, oldPassword, newPassword }) {
    const it = this.userRepo;

    const userPassword = await it.getPassword(id);

    //Verifica se a senha antiga foi informada e se confere com a senha no banco de dados
    const passwordMatch = await compare(oldPassword, userPassword);
    if (!passwordMatch) {
      throw new AppError("Senha não confere, não autorizado a atualizar");
    }

    //Caso tenha sido passada uma senha nova, a antiga deve também ser passada.
    if (newPassword && !oldPassword) {
      throw new AppError(
        "Você precisa informar a senha antiga para atualizar a senha"
      );
    }

    //Define qual é a senha na atualização;
    const encryptedPassword =
      newPassword && oldPassword ? await hash(newPassword, 8) : userPassword;

    const updatedUser = await it.update({
      id,
      name,
      password: encryptedPassword,
    });

    if (!updatedUser)
      throw new AppError(
        "Usuário não consta no banco de dados, não pode ser atualizado.",
        404
      );

    return updatedUser;
  }
};
