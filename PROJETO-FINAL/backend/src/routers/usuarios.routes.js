import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioController.js';

const router = Router();
const usuarioController = new UsuarioController();

router.post('/', usuarioController.criarUsuario);
router.post('/comprar', usuarioController.comprarLivro);
router.get('/', usuarioController.listarUsuarios);
router.get('/:id', usuarioController.obterUsuario);
router.put('/:id', usuarioController.atualizarUsuario);
router.delete('/:id', usuarioController.excluirUsuario);

export default router;