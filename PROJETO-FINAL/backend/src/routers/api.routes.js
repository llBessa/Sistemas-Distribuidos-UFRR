import { Router } from "express";
import usuariosRoutes from "./usuarios.routes.js"
import livrosRoutes from "./livros.routes.js"
import { criaTabelas } from "../config/database.js";

const router = Router()

router.use("/usuarios", usuariosRoutes)
router.use("/livros", livrosRoutes)

criaTabelas()

export default router;