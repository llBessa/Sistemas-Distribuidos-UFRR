import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize";
import "./associations.js"
import { criaRelacoes } from "./associations.js";

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: true
  },
  CEP: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// cria as relações entre as tabelas
criaRelacoes()

export { Usuario }