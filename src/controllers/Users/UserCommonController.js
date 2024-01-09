const UserCommonRepository = require("../../repositories/User/UserCommonRepository");
const UserCommonServices = require("../../services/USer/UserCommonServices");

module.exports = class UserCommonController {
  async validate(req, res) {}

  async updateSelf(req, res) {
    const { id } = req.user;
    const { name, oldPassword, newPassword } = req.body;

    const userRepo = new UserCommonRepository();
    const userServices = new UserCommonServices(userRepo);

    await userServices.executeUpdateSelf({
      id,
      name,
      oldPassword,
      newPassword,
    });

    return res.json();
  }

  async getYourself(req, res) {}
};
