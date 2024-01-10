const UserCommonRepository = require("../../repositories/User/UserCommonRepository");
const UserCommonServices = require("../../services/USer/UserCommonServices");

module.exports = class UserCommonController {
  async validate(req, res) {
    const { id } = req.user;

    const userRepo = new UserCommonRepository();
    const userServices = new UserCommonServices(userRepo);

    const existentUserId = await userServices.executeValidate(id);

    return res.json(existentUserId);
  }

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

  async getYourself(req, res) {
    const { id } = req.user;

    const userRepo = new UserCommonRepository();
    const userServices = new UserCommonServices(userRepo);

    const user = await userServices.executeGetYourself(id);

    return res.json(user);
  }
};
