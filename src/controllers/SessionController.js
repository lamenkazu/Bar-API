const SessionRepository = require("./../repositories/SessionRepository");
const SessionService = require("./../services/SessionService");

module.exports = class SessionController {
  async create(req, res) {
    const { cpf, password } = req.body;

    const sessionRepo = new SessionRepository();
    const sessionService = new SessionService(sessionRepo);

    return res.status(201).json({ cpf, password });
  }
};
