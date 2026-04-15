# Clínica Veterinária API

API REST desenvolvida em Node.js para gerenciamento de tutores, animais e consultas.

---

## Requisitos

* Node.js
* PostgreSQL em execução

---

## Como executar o projeto

1. Clonar o repositório

git clone <URL_DO_REPOSITORIO>
cd clinica-veterinaria

---

2. Instalar dependências

npm install

---

3. Criar banco de dados

Criar um banco no PostgreSQL com o nome:

clinica

---

4. Configurar o arquivo `.env`

Criar um arquivo `.env` na raiz do projeto com:

DATABASE_URL="postgresql://postgres:senai@localhost:5432/clinica"

Obs: ajustar porta/usuário/senha conforme o ambiente.

---

5. Executar as migrations

npx prisma migrate dev

---

6. Iniciar o servidor

npm run dev

ou

node src/server.js

---

## Rotas principais

### Tutores

GET /tutores
GET /tutores/:id
POST /tutores

### Animais

GET /animais
GET /animais/:id
POST /animais

### Consultas

GET /consultas
GET /consultas/:id
POST /consultas

### Rota adicional

GET /animais/:id/consultas

---

## Observações

* API não possui interface gráfica (não há rota "/")
* Testes podem ser feitos via Thunder Client ou Insomnia
* Utiliza Prisma ORM para acesso ao banco de dados
* As tabelas são criadas automaticamente via migration