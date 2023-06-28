# Projeto final da disciplina de sistemas distribuídos

## Desenvolvedores
---
Lucas Bessa Façanha Pereira

[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/llBessa)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucas-bessa-185565245/)

Kevin Willyn Conceição Barros

[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KvWIlY)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kevin-willyn-3130b9133/)

## E-commerce de compras de livros (YourLibrary)
---
Consiste em um sistema de aquisição de livros online, onde as pessoas podem encontrar seus livros favoritos e vendedores podem publicar seus materiais disponiveis!

### Arquitetura
---
![arquitetura do projeto](imagens/Arquitetura%20do%20projeto.png)

### Docker
---

> Os serviços e microsserviços do sistema vão estar dividos em containers docker separados e assim vão realizar a sua comunicação através do sistema de networking do Docker.

### Organização
---

> **Frontend:** Sistema em NextJs que gerencia os elementos renderizados ao lado do cliente

> **Backend:** Servidor NodeJs que controla a comunicação com o frontend, banco de dados e os microsserviços utilizados

> **Banco de dados:** SGBD PostgreSQL para guardar os dados do sistema

### Microserviços
---

> **Correios:** Utilizado para obter informações de endereço do cliente que busca comprar um livro no sistema e assim prover as informações necessárias ao backend.

> **Pagamentos:** Sistema que autentica os pagamentos relazidados na plataforma

> **Google Books:** Utilizado para obter a coleção de arquivos disponíveis no sistema.<br>
>
> **Obs: Além dos livros que vem da Api do Google Books, o sistema permite o cadastro diretamente pelo site.**

## Como rodar o projeto?
---

> Primeiramente, no arquivo docker-compose.yml que está na raiz do projeto, deve-se alterar "**Caminho do arquivo**" pelo caminho absoluto do projeto no sistema.
>
> Logo após, execute o comando "**docker compose up**" no terminal e espere os seviços iniciarem.
