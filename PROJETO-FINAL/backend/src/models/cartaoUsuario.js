import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize";

const CartaoUsuario = sequelize.define('CartaoUsuario', {
    numero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    titular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataExpiracao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cvv: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export { CartaoUsuario }