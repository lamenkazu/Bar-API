import { AppError } from "./../utils/AppError.js";

export class SessionService {
  constructor(sessionRepo) {
    this.sessionRepo = sessionRepo;
  }
}
