import sequelize from "../config/database";
import Usuario from "./user";

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Cria as tabelas
    console.log("Banco de dados conectado e tabelas criadas");
  } catch (error) {
    console.error("Erro ao conectar ao banco:", error);
  }
};

export { sequelize, Usuario, initializeDatabase };
