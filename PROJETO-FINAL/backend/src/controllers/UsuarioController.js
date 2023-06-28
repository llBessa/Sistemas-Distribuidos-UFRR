import { Usuario } from "../models/Usuario.js";
import { Livro } from "../models/Livro.js";

class UsuarioController {
    async criarUsuario(req, res) {
        try {
            const usuario = await Usuario.create(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async listarUsuarios(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obterUsuario(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) {
                res.status(404).json({ message: 'Usuário não encontrado' });
            } else {
                res.json(usuario);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async atualizarUsuario(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) {
                res.status(404).json({ message: 'Usuário não encontrado' });
            } else {
                await usuario.update(req.body);
                res.json(usuario);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async excluirUsuario(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) {
                res.status(404).json({ message: 'Usuário não encontrado' });
            } else {
                await usuario.destroy();
                res.json({ message: 'Usuário excluído com sucesso' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async comprarLivro(req, res) {
        const { userId, livroId } = req.body;
    
        try {
          // Verifica se o usuário existe
          const user = await Usuario.findByPk(userId);
          if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
          }
    
          // Verifica se o livro existe
          const livro = await Livro.findByPk(livroId);
          if (!livro) {
            return res.status(404).json({ error: 'Livro não encontrado' });
          }
    
          // Cria uma nova relação entre o usuário e o livro
          const usuarioLivro = new UsuarioLivro({
            userId: user.id,
            livroId: livro.id,
          });
    
          // Salva a relação no banco de dados
          await usuarioLivro.save();
    
          return res.status(201).json({ message: 'Relação criada com sucesso' });
        } catch (error) {
          console.error('Erro ao criar a relação:', error);
          return res.status(500).json({ error: 'Erro ao criar a relação' });
        }
      }
}

export { UsuarioController }
