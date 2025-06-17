## Nome: Luthiano Matheus Gomes Pacheco

## 📦 Como executar este projeto

1. Acesse a pasta do projeto no terminal:
```
cd caminho/para/o/projeto/projeto_fase_02
```

2. Instale as dependências do projeto:
```
npm install
```

3. Execute o projeto:
```
npm start
```

#
<code><b>⚠️ IMPORTANTE</b>: para o funcionamento correto, é necessário rodar localmente também a API <i>readingJournal-api</i>, fornecida pela PUCRS, utilizando os mesmos passos acima, ajustando o caminho conforme necessário.</code>
#

<br/>
Após a execução, o resultado esperado será uma aplicação para gerenciamento de livros rodando no navegador.
<br/> <br/>

![home](https://github.com/user-attachments/assets/00a4f34b-2925-4221-aa0f-53dec8f72570)

![about](https://github.com/user-attachments/assets/8b930d53-8647-4ebb-8824-63a6a64da2e1)

https://github.com/user-attachments/assets/b82fa942-ccea-4eb0-bcd2-e1b0b4302475

https://github.com/user-attachments/assets/9ab2934c-074e-42bb-9444-26ae54ad481f


## 📚 Introdução
Este projeto é uma aplicação desenvolvida em <strong>React</strong> com o objetivo de permitir o gerenciamento de uma lista de livros. A aplicação oferece funcionalidades para adicionar, listar, editar e remover livros. Também utiliza:
- <b>React Router Dom</b> para navegação entre páginas;
- <b>Hooks</b> (<code>useState</code> / <code>useEffect</code>) para controle de estado e efeitos;
- <b>Axios</b> para requisições HTTP;
- <b>Material UI (MUI)</b> e <b>CSS customizado</b> para estilização.

## 🧩 Componentes
- <strong>NavBar</strong>
  - Barra de navegação superior que permite navegar entre as páginas "Home", "Sobre", "Cadastr" e "Ver Leituras".

- <strong>Home</strong>
  - Página inicial com a logo e o slogan do site.

- <strong>About</strong>
    - Página com uma breve descrição sobre o projeto.
    - parâmetros:
      - description: descrição da tela
  
- <strong>BookForm</strong>
    - Formulário para cadastro de livros com campos: título, autor, gênero e lido em.
  
- <strong>BookList</strong>
    - Lista de livros cadastrados com botões de edição e remoção.
    - Exibe botão que redireciona para a tela de cadastro de novos livros quando a lista está vázia.

## 🧠 Funcionalidades
- Navegação entre páginas via rotas (react-router-dom.
- Cadastro de livros com validação de campos.
- Listagem dinâmica dos livros cadastrados.
- Edição inline dos livros diretamente da lista.
- Remoção de livros.
- Estilização com Material UI + CSS customizado.
- Responsividade básica para boa visualização em diferentes tamanhos de tela.

## 🚀 Conclusão
  Este projeto foi desenvolvido com foco em aprendizado e prática de conceitos fundamentais do React, como componentização, manipulação de estado, listas dinâmicas, navegação por rotas, componentes estilizados com MUI e requisições HTTP.
