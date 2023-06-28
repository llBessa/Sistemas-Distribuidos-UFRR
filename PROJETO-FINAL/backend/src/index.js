import dotenv from "dotenv/config.js";
import express from "express";
import cors from "cors";
import router from "./routers/api.routes.js";
import { sequelize } from "./config/database.js";

const port = process.env.PORT;
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", router)

app.listen(port, async () => {
    console.log("App funcionando na porta " + port);

    try {
        await sequelize.authenticate()
        console.log("Conexao realizada com sucesso!")
    } catch (e) {
        console.error("Não se conectou ao banco de dados!\n" + e)
    }
})

export default app;