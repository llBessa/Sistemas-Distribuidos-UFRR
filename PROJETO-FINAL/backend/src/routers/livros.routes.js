import { Router } from 'express';
import { LivroController } from "../controllers/LivroController.js"

const router = Router();
const livroController = new LivroController();

router.post('/', livroController.criarLivro);
router.get('/', livroController.listarLivros);
router.get('/:id', livroController.obterLivro);
router.put('/:id', livroController.atualizarLivro);
router.delete('/:id', livroController.excluirLivro);

export default router;