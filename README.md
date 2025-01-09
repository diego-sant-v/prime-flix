
# FilmeFlix

Um site desenvolvido para consumir a API do TMDB (The Movie Database), permitindo que os usuários visualizem filmes em cartaz, adicionem filmes aos favoritos, excluam dos favoritos, assistam a trailers e muito mais.

---

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Como Usar](#como-usar)
- [Agradecimentos](#agradecimentos)

---

## Visão Geral

**FilmeFlix** é um site simples e intuitivo que permite aos usuários explorar filmes em cartaz, marcar seus favoritos e acessar trailers. O site foi criado como um projeto para prática de desenvolvimento web, utilizando React no frontend e a API do TMDB para fornecer dados.

---

## Funcionalidades

- **Listar filmes em cartaz**: Exibe uma lista atualizada de filmes em exibição nos cinemas.
- **Favoritar filmes**: Adiciona filmes à lista de favoritos do usuário.
- **Remover dos favoritos**: Permite excluir filmes da lista de favoritos.
- **Assistir trailers**: Integração com o YouTube para reproduzir trailers.
- **Design responsivo**: O site funciona bem em dispositivos desktop e móveis.

---

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Estilização**: CSS
- **Roteamento**: React Router
- **API**: [TMDB (The Movie Database)](https://www.themoviedb.org/)
- **Gerenciamento de Estado**: useState e useEffect

---

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/filmeflix.git
   cd filmeflix
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure a API key**:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a sua chave da API do TMDB no arquivo `.env`:
     ```env
     REACT_APP_API_KEY=suas_chave_da_api_aqui
     ```

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   # ou
   yarn start
   ```

5. **Acesse o site**:
   Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## Como Usar

1. **Navegar pelos filmes**: A página inicial lista os filmes em cartaz.
2. **Favoritar um filme**: Clique no botão de favoritos para adicionar o filme à sua lista.
3. **Remover dos favoritos**: Acesse a lista de favoritos e clique no botão de excluir.
4. **Assistir trailers**: Clique no botão de trailer para assistir ao vídeo correspondente.

---

## Agradecimentos

- **TMDB**: Por fornecer uma API incrível e acessível para desenvolvedores.
- **React**: Pela plataforma poderosa para criar interfaces dinâmicas.

---

Feito com ❤️ por Diego Sousa (https://github.com/diego-sant-v).
