import "dotenv/config";
import "express-async-errors";
import { AppError } from "./utils/AppError.js";

import express from "express";
// import routes from "./routes";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json());
// app.use(routes)
app.use(cors());

app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  console.log(err);

  return res.status(500).json({
    status: "error",
    message: "Erro interno do servidor",
  });
});

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`api runing on port ${port}!`));
