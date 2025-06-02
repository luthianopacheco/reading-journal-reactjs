## Nome: Luthiano Matheus Gomes Pacheco

## 📦 Como executar este projeto
1. Acesse a pasta do projeto no terminal:
```
cd caminho/para/o/projeto/projeto_fase_01
```

2. Instale as dependências do projeto:
```
npm install
```

3. Execute o projeto:
```
npm start
```

Após a execução, o resultado esperado será uma aplicação para gerenciamento de livros rodando no navegador.

https://github.com/user-attachments/assets/f095a5aa-e3fa-43e2-8c37-9267c990235e


## 📚 Introdução
Este projeto é uma aplicação desenvolvida em <strong>React</strong> com o objetivo de permitir o gerenciamento de uma lista de livros, incluindo funcionalidades para adicionar, listar, editar e remover livros. Ele também inclui navegação entre páginas utilizando estado global com React (<code>useState</code>), e estilização com Bootstrap e CSS customizado.

## 🧩 Componentes
- <strong>NavBar</strong>
  - Barra de navegação superior que permite trocar entre as páginas "Página Inicial", "Sobre", "Lista de Livros" e "Cadastrar".
  - parâmetros:
    - <code>setPage</code>: função de callback para setar o component (caminho) a ser carregado;

- <strong>Home</strong>
  - Página inicial com uma mensagem de boas-vindas.
  - parâmetros:
    - description: descrição da tela

- <strong>About</strong>
    - Página com uma breve descrição sobre o projeto.
    - parâmetros:
      - description: descrição da tela
  
- <strong>BookForm</strong>
    - Formulário para cadastro de livros com campos de título, autor, gênero e data.
    - parâmetros:
      - <code>addBook</code>: função de callback para adicionar um livro.
  
- <strong>BookList</strong>
    - Lista de livros cadastrados com botões de edição e remoção, além de um botão que redireciona para a tela de cadastro de novos livros.
    - parâmetros:
      - <code>books</code>: array com a lista de livros.
      - <code>removeBook</code>: função para remover um livro da lista.
      - <code>editBook</code>: função para ativar o modo de edição de um livro.
      - <code>setPage</code>: controle de navegação entre as telas.

## 🧠 Funcionalidades
- Navegação entre páginas via estado centralizado.
- Cadastro de livros com validação de campos.
- Listagem dinâmica dos livros cadastrados.
- Edição inline dos livros diretamente da lista.
- Remoção de livros.
- Estilização com Bootstrap + CSS customizado.
- Responsividade básica para boa visualização em diferentes tamanhos de tela.

## 🚀 Conclusão
  Este projeto foi desenvolvido com foco em aprendizado e prática de conceitos fundamentais do React, como componentização, estado compartilhado, manipulação de listas, e integração com Bootstrap.
