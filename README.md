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
* JWT (JSON Web Token)
* Swagger (documentação)
* Postman (collection de testes)

---

## 🏗️ Arquitetura do Projeto

O projeto segue o padrão de **arquitetura em camadas**, promovendo organização, escalabilidade e separação de responsabilidades.

```
src/
 ├── config/ 
 ├── controllers/
 ├── middlewares/ 
 ├── models/
 ├── routes/
 └── services/
```

### 🔎 Responsabilidades

* **routes/** → Define as rotas da API
* **controllers/** → Recebe requisições e retorna respostas
* **services/** → Contém as regras de negócio
* **models/** → Modelagem das entidades no banco
* **middlewares/** → Autenticação, autorização e validações
* **config/** → Configurações gerais (banco, JWT etc.)

---

## 📦 Funcionalidades

### 🛍 Produtos

* Cadastro de produtos
* Associação a categorias
* Atualização e remoção

### 🗂 Categorias

* Cadastro de categorias
* Listagem

### 📊 Estoque

* Controle automático de estoque
* Atualização após venda

### 💰 Vendas

* Registro de venda
* Itens da venda
* Cálculo automático do total

### 📈 Relatórios

* Relatório de vendas por período (data inicial e final)

---

## 🔐 Autenticação e Autorização

* Autenticação via **JWT**
* Controle de acesso baseado em **roles**

  * `ADMIN`
  * `VENDEDOR`

Apenas usuários autorizados podem:

* Cadastrar produtos
* Alterar estoque
* Visualizar relatórios

---

## 📜 Regras de Negócio

* ❌ Não é permitido vender produtos sem estoque disponível
* 🔄 O estoque é atualizado automaticamente após cada venda
* ✅ Todos os dados passam por validação antes de persistência

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
DATABASE_URL=url_do_banco
JWT_SECRET=chave_secreta
```

### 4️⃣ Executar o projeto

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

A collection está disponível no repositório:

```
/docs/postman_collection.json
```

Permite testar todas as rotas com autenticação JWT configurada.

---

## 📌 Rotas da API

### 🔐 Autenticação

| Método | Rota        | Descrição                |
| ------ | ----------- | ------------------------ |
| POST   | /auth/login | Login e geração de token |

---

### 🗂 Categorias

| Método | Rota        | Descrição         |
| ------ | ----------- | ----------------- |
| POST   | /categories | Criar categoria   |
| GET    | /categories | Listar categorias |

---

### 📦 Produtos

| Método | Rota          | Descrição         |
| ------ | ------------- | ----------------- |
| POST   | /products     | Cadastrar produto |
| GET    | /products     | Listar produtos   |
| PUT    | /products/:id | Atualizar produto |
| DELETE | /products/:id | Remover produto   |

---

### 💰 Vendas

| Método | Rota                                                  | Descrição             |
| ------ | ----------------------------------------------------- | --------------------- |
| POST   | /sales                                                | Registrar venda       |
| GET    | /sales                                                | Listar vendas         |
| GET    | /sales/report?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD | Relatório por período |

---

## 📌 Contribua!
