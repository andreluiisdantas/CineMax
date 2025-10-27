# 🎬 CineMax

**CineMax** é uma aplicação web de gerenciamento de filmes, desenvolvida para oferecer uma experiência completa de listagem, busca e administração de títulos cinematográficos.  
O sistema inclui autenticação de usuários, diferenciação de permissões entre administradores e usuários comuns, além de um CRUD completo (Create, Read, Update, Delete) integrado a um banco de dados MySQL.

---

## 🚀 Tecnologias Utilizadas

### 💻 Front-End
- **React** + **Vite**
- **React Router DOM** — para navegação entre páginas
- **Axios** — consumo da API

### 🐍 Back-End
- **Python (puro)** — implementação do servidor e das rotas
- **MySQL** — armazenamento dos dados dos filmes e usuários
- **Bibliotecas auxiliares (sugestão):**
  - `mysql.connector` — integração com o banco
  - `json` — manipulação de dados
  - `http.server` — criação do webserver

---

## 🎯 Objetivo do Projeto

Criar um site de gerenciamento de filmes com funcionalidades completas de CRUD, autenticação e uma interface amigável e atrativa.

---

## ⚙️ Funcionalidades

### 🏠 Página Home
- Apresentação do site com destaques e atalhos para as principais seções.

### 🎞️ Listagem de Filmes
- Exibição em formato de **grade** ou **lista**.
- Informações mostradas:
  - Título
  - Ano
  - Gênero
  - Sinopse
  - Poster do filme

### ➕ Adição de Filmes
- Formulário com validação de campos obrigatórios.
- Campos baseados na modelagem feita no Back-End.
- Usuários comuns podem adicionar filmes (necessário aprovação do administrador).

### ✏️ Edição de Filmes
- Edição dos dados de um filme (sujeito à aprovação do administrador).

### 🗑️ Exclusão de Filmes
- Apenas **administradores** podem deletar filmes do sistema.

### 🔍 Busca e Filtros
- Busca por **título**.
- Filtros por **gênero**, **ano**, **diretor**, **ator**, entre outros.

### 👤 Sistema de Autenticação
- Login com diferenciação de permissões:
  - **Usuário comum:** pode adicionar filmes.
  - **Administrador:** pode aprovar, editar e deletar filmes.

### 📄 Página de Filme
- Exibição de informações completas de um filme específico.

### ✅ Validação
- Validação de campos nos formulários.
- Testes de usabilidade para garantir uma boa experiência do usuário.

---

## 🗂️ Estrutura do Projeto

CineMax/
│
├── backend/
│ ├── server.py
│ ├── database/
│ │ └── connection.py
│ ├── routes/
│ │ ├── filmes.py
│ │ └── usuarios.py
│ └── models/
│ ├── filme_model.py
│ └── usuario_model.py
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── index.html
│
├── README.md
└── package.json

yaml
Copiar código

---

## 🧩 Requisitos para Rodar o Projeto

### 🔧 Back-End
1. Instale o Python (versão 3.10 ou superior).  
2. Instale as dependências necessárias:
   ```bash
   pip install mysql-connector-python
Configure o banco de dados MySQL:

sql
Copiar código
CREATE DATABASE cinemax;
USE cinemax;
Execute o servidor:

bash
python server.py

🌐 Front-End

Instale as dependências:
bash
npm install

Execute o servidor local:
bash
npm run dev
Acesse em: http://localhost:5173

🧑‍💻 Equipe de Desenvolvimento
Nome	Função
André Luis Sousa Dantas -	Desenvolvedor Full-Stack
Prof. Mariany Morais	Orientadora

📘 Entregáveis
Figma (protótipo de média fidelidade)

Documentação técnica (seguindo modelo do Teams)

Site funcional (CRUD completo, autenticação e interface finalizada)

🏁 Status do Projeto
🚧 Em desenvolvimento
