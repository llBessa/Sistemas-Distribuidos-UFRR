import { Sequelize } from "sequelize";

const user = process.env.BANCO_USER
const banco_host = process.env.BANCO_HOST
const password = process.env.BANCO_PASSWORD
const database = process.env.BANCO_DATABASE

const sequelize = new Sequelize(database, user, password, {
    host: banco_host,
    dialect: "postgres"
});

async function criaTabelas() {
    try {
        await sequelize.sync({force: true})
        console.log("tabelas criadas com sucesso!")
    } catch (error) {
        console.error("Não foi possivel criar as tabelas\n" + error)
    }
}

export { sequelize, criaTabelas };