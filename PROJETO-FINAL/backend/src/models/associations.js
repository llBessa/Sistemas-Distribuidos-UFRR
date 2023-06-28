import { CartaoUsuario } from "./CartaoUsuario.js";
import { Livro } from "./Livro.js";
import { Pagamento } from "./Pagamento.js";
import { Usuario } from "./Usuario.js";

function criaRelacoes() {
    // Associação entre Usuário e Livro (relação de "muitos para muitos")
    Usuario.belongsToMany(Livro, { through: 'UsuarioLivro', as: 'livros', foreignKey: 'usuarioId' });
    Livro.belongsToMany(Usuario, { through: 'UsuarioLivro', as: 'usuarios', foreignKey: 'livroId' });

    // Associação entre Usuário e Pagamento (relação de "um para muitos")
    Usuario.hasMany(Pagamento, { foreignKey: 'usuarioId' });
    Pagamento.belongsTo(Usuario, { foreignKey: 'usuarioId' });

    // Associação entre Usuário e Cartão de Usuário (relação de "um para muitos")
    Usuario.hasMany(CartaoUsuario, { foreignKey: 'usuarioId' });
    CartaoUsuario.belongsTo(Usuario, { foreignKey: 'usuarioId' });
}

export { criaRelacoes }