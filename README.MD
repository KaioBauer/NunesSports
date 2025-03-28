Perfeito! Abaixo está o `README.md` atualizado com instruções para uso do **dotenv** no backend (usando variáveis de ambiente com `.env`).

---

# Nunes Sports - Sistema de Gestão de Produtos

Este projeto é uma aplicação web fullstack desenvolvida para a empresa fictícia **Nunes Sports**, com o objetivo de gerenciar os produtos vendidos.

---

## 🚀 Tecnologias utilizadas

- **Frontend:** React + TypeScript + TailwindCSS + Vite
- **Backend:** Node.js + Express + Prisma + TypeScript
- **Banco de Dados:** PostgreSQL
- **Configuração de ambiente:** dotenv

---

## 📦 Funcionalidades

- ✅ Listar todos os produtos
- ✅ Criar novo produto
- ✅ Editar produto existente
- ✅ Excluir produto
- ✅ Integração total com banco de dados

---

## 🛠 Como rodar localmente

### 1. Configure o PostgreSQL

Você precisa de um banco com os seguintes dados:

```
HOST:     localhost
PORT:     5432
USER:     nunes
PASSWORD: nunes123
DATABASE: nunesdb
```

Ou use Docker:

```bash
docker run --name nunes-postgres -e POSTGRES_USER=nunes -e POSTGRES_PASSWORD=nunes123 -e POSTGRES_DB=nunesdb -p 5432:5432 -d postgres:15
```

---

### 2. Backend

```bash
cd backend
npm install
```

#### ➕ Crie um arquivo `.env` na pasta `backend/` com o conteúdo:

```env
DATABASE_URL="postgres://nunes:nunes123@localhost:5432/nunesdb"
```

#### ➕ Atualize seu código `main.ts` com:

```ts
import "dotenv/config"; // Adicione no topo do arquivo
```

#### Rode os comandos:

```bash
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

🟢 Servidor: [http://localhost:3000](http://localhost:3000)

---

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

🟢 Interface: [http://localhost:5173](http://localhost:5173)

---
