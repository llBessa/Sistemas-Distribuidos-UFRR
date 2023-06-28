import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize";

const Livro = sequelize.define('Livro', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: true
    },
    anoPublicacao: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

export { Livro }