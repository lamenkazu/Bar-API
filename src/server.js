require("dotenv/config");
require("express-async-errors");
const AppError = require("./utils/AppError");

const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  })
);
app.use(routes);

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
