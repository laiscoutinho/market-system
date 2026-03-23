# 🛒 Sistema de Supermercado

**Gestão de Vendas e Controle de Estoque**

## 📌 Descrição do Sistema

API RESTful desenvolvida para gerenciamento de um supermercado, permitindo controle completo de produtos, categorias, estoque e vendas.

O sistema garante integridade das operações comerciais por meio de regras de negócio que impedem vendas sem estoque disponível e realizam atualização automática do estoque após cada venda.

A aplicação foi construída seguindo arquitetura em camadas, com autenticação JWT e controle de acesso baseado em perfis (roles).

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* JavaScript
* MySQL
* Sequelize (ORM)
* JWT (JSON Web Token)
* Swagger (documentação)
* Zod (validação de dados)
* Postman (collection de testes)

---

## 🏗️ Arquitetura do Projeto

O projeto segue o padrão de **arquitetura em camadas**, promovendo organização, escalabilidade e separação de responsabilidades.

```
src/
 ├── config/       → Configurações de banco de dados e Swagger
 ├── controllers/  → Recebe requisições e retorna respostas
 ├── docs/         → Documentação Swagger separada por entidade
 ├── middlewares/  → Autenticação, autorização, validação e erros
 ├── models/       → Modelagem das entidades no banco
 ├── repository/   → Isolamento das queries ao banco de dados
 ├── routes/       → Definição das rotas da API
 ├── services/     → Regras de negócio
 ├── utils/        → Utilitários como AppError
 └── validations/  → Schemas de validação com Zod
```

### 🔎 Responsabilidades

* **routes** → define os endpoints e encadeia os middlewares
* **controllers** → recebe `req`, chama o service e devolve `res`
* **services** → contém as regras de negócio da aplicação
* **repository** → única camada que acessa o banco via Sequelize
* **models** → define as tabelas e associações do MySQL
* **middlewares** → autenticação JWT, controle de roles, validação de entrada e tratamento de erros
* **validations** → schemas Zod para validar body e query params
* **docs** → documentação Swagger organizada por entidade

---

## 📌 Funcionalidades, Rotas da API e Autorização

* Autenticação via **JWT**
* Controle de acesso baseado em **roles**
  * `ADMIN` → acesso total
  * `VENDEDOR` → acesso limitado
* Todos os dados passam por validação antes de persistência

### 🔐 Autenticação

| Método | Rota           | Descrição                | Auth            |
| ------ | -------------- | ------------------------ | --------------- |
| POST   | /auth/register | Cadastro de usuário      | NAO PRECISA     |
| POST   | /auth/login    | Login e geração de token | NAO PRECISA     |

---

### 🗂 Categorias
* Cadastro de categorias
* Listagem

| Método | Rota           | Descrição                | Auth             |
| ------ | -------------- | ------------------------ | ---------------- |
| POST   | /categories    | Criar categoria          | ADMIN            |
| GET    | /categories    | Listar categorias        | ADMIN, VENDEDOR  |

---

### 📦 Produtos
* Cadastro de produtos
* Associação a categorias
* Atualização e remoção da quantidade

| Método | Rota           | Descrição                | Auth             |
| ------ | -------------- | ------------------------ | ---------------- |
| POST   | /products      | Cadastrar produto        | ADMIN            |
| GET    | /products      | Listar produtos          | ADMIN, VENDEDOR  |
| PUT    | /products/:id  | Atualizar produto        | ADMIN            |
| DELETE | /products/:id  | Remover produto          | ADMIN            |

---

### 💰 Vendas e relatório
* Registro de venda
* Itens da venda
* Controle automático de estoque e atualização após venda
* Não é permitido vender produtos sem estoque disponível
* Relatório de vendas por período (data inicial e final)

| Método | Rota           | Descrição                | Auth             |
| ------ | -------------- | ------------------------ | ---------------- |
| POST   | /sales         | Registrar venda          | ADMIN, VENDEDOR  |
| GET    | /sales         | Listar vendas            | ADMIN, VENDEDOR    |
| GET    | /sales/report?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD | Relatório por período | ADMIN |

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/laiscoutinho/market-system
cd market-system
```

### 2️⃣ Instalar dependências

```bash
npm install 
```

### 3️⃣ Configurar variáveis de ambiente

Criar um arquivo `.env`:

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=market_system
JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=8h
```

### 4️⃣ Criar o banco de dados
```bash
mysql -u root -p -e "CREATE DATABASE market_system;"
```

### 5️⃣  Executar o projeto

```bash
npm run dev
```

Servidor rodando em:

```
http://localhost:3000
```

---

## 📄 Documentação da API

A documentação pode ser acessada via:

```
http://localhost:3000/docs
```

Implementada com **Swagger**.

---

## 📬 Collection Postman

A collection está disponível na raiz do repositório:
```
market-system.postman_collection.json
```

Importar no Postman via **Import → selecionar o arquivo**.

O request de login salva o token automaticamente — todas as rotas autenticadas já funcionam sem configuração manual.

---