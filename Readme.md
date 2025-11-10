# api-cidades-piauí🌵🪗
## 📘 Visão Geral
Uma api que fornece as principais informações dos municípios do estado do Piauí, com uma breve descrição e suas principais características, culturais, econômicas e geográficas. O objetivo desse projeto é fornecer esses dados de uma forma conjunta e que podem agregar futuramente, integrando outras aplicações.
## 🚧 Status do projeto
Em desenvolvimento 🚀
## 🔧 Tecnologias Usadas
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
## 👷 Arquitetura da aplicação
A arquitetura escolhida foi a MVC- **Model View Controller**.
Como foi um projeto simples onde estava aprdendo algumas novas stacks e noções de como escrever e estruturar o código melhor, resolvi usar essas arquitetura pois já tinha um pouco de dominio sobre ela o que me fez focar no desenvolvimento de noval tech skills.
## ⚙️ Como rodar o projeto
#### Clonar repositório
```bash
git clone https://github.com/vicentejuniordev/api-cidades-node.git
```
#### Instalar depedências
```bash
npm i
```
#### Configurar variáveis ambientes
```js
PORT=
NODE_ENV=
IS_LOCALHOST=
```
#### Executar as migrations
```bash
npm run knex:migrate
```
### Fazer rollback
```bash
npm run knex:rollback
```
#### Rodar o app
```bash
npm start
```

### Tests
Para fazer os tests usei o jest onde foi a minha primeira experiência com tests, achei ele bem intuitivo e simples de usar, por conta disso deixei ele como o padrão
#### Para executar os tests
```bash
npm run test
```

