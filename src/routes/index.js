import { Router } from "express";

import { usersRoutes } from "./users.routes.js";
import { sessionsRoutes } from "./sessions.routes.js";
import { salesRoutes } from "./sales.routes.js";
import { stockRoutes } from "./stock.routes.js";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/sales", salesRoutes);
routes.use("/stock", stockRoutes);

export { routes };
