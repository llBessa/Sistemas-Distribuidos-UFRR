import { Livro } from "../models/Livro.js";

class LivroController {
    async criarLivro(req, res) {
        try {
            const livro = await Livro.create(req.body);
            res.status(201).json(livro);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async listarLivros(req, res) {
        try {
            const livros = await Livro.findAll();
            res.json(livros);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obterLivro(req, res) {
        try {
            const livro = await Livro.findByPk(req.params.id);
            if (!livro) {
                res.status(404).json({ message: 'Livro não encontrado' });
            } else {
                res.json(livro);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async atualizarLivro(req, res) {
        try {
            const livro = await Livro.findByPk(req.params.id);
            if (!livro) {
                res.status(404).json({ message: 'Livro não encontrado' });
            } else {
                await livro.update(req.body);
                res.json(livro);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async excluirLivro(req, res) {
        try {
            const livro = await Livro.findByPk(req.params.id);
            if (!livro) {
                res.status(404).json({ message: 'Livro não encontrado' });
            } else {
                await livro.destroy();
                res.json({ message: 'Livro excluído com sucesso' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export { LivroController }
