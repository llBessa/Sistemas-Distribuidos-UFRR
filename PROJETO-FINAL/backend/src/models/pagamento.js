import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize";

const Pagamento = sequelize.define('Pagamento', {
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    metodo: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export { Pagamento }