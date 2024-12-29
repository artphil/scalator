import express from "express";
import dotenv from "dotenv";
import { initializeDatabase } from "./models";

import usersRouter from "./routes/users";
import scalesRouter from "./routes/scales";
import postsRouter from "./routes/posts";
import scalePostsRouter from "./routes/scalePosts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use("/", usersRouter);
app.use("/", scalesRouter);
app.use("/", scalePostsRouter);
app.use("/", postsRouter);

// Inicializa o banco e sobe o servidor
initializeDatabase();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
