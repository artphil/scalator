import express from "express";
import dotenv from "dotenv";
import usersRouter from "./routes/users";
import { initializeDatabase } from "./models";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use("/api", usersRouter);

// Inicializa o banco e sobe o servidor
initializeDatabase();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
