import sequelize from "../config/database";

import Person from "./person";
import Post from "./post";
import Scale from "./scale";
import ScalePost from "./scalePost";
import User from "./user";

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Cria as tabelas
    console.log("Banco de dados conectado e tabelas criadas");
  } catch (error) {
    console.error("Erro ao conectar ao banco:", error);
  }
};

export { sequelize, User, Post, Scale, ScalePost, Person, initializeDatabase };
