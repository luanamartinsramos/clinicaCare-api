# 🏥 ClínicaCare API

API REST do **ClínicaCare**, um sistema de gerenciamento de pacientes desenvolvido para praticar e aplicar conceitos de desenvolvimento backend com **NestJS, TypeScript, Prisma e SQLite**.

O projeto fornece uma API para cadastro, consulta, edição e exclusão de pacientes, com validação dos dados recebidos e persistência em banco de dados.

## 🚀 Tecnologias

- Node.js
- NestJS
- TypeScript
- Prisma ORM
- SQLite
- class-validator
- class-transformer

## 📋 Funcionalidades

- Cadastro de pacientes
- Listagem de pacientes
- Edição de pacientes
- Exclusão de pacientes
- Validação dos dados enviados pela API
- Validação de CPF único
- Tratamento de erros HTTP
- Persistência dos dados com Prisma
- Integração com SQLite
- CORS habilitado para comunicação com o frontend

## 📁 Estrutura do projeto


src/
├── patients/
│   ├── dto/
│   │   ├── create-patient.dto.ts
│   │   └── update-patient.dto.ts
│   ├── patients.controller.ts
│   ├── patients.service.ts
│   └── patients.module.ts
│
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
├── generated/
│   └── prisma/
│
├── app.module.ts
└── main.ts

prisma/
└── schema.prisma
🔗 Endpoints
Listar pacientes
GET /patients

Retorna todos os pacientes cadastrados.

Cadastrar paciente
POST /patients

Exemplo de requisição:

{
  "name": "Maria Silva",
  "cpf": "123.456.789-00",
  "birthDate": "1998-05-20",
  "phone": "(21) 99999-9999",
  "email": "maria@email.com",
  "address": "Rua das Flores, 100"
}
Editar paciente
PATCH /patients/:id

Exemplo:

{
  "name": "Maria da Silva",
  "phone": "(21) 98888-8888"
}
Excluir paciente
DELETE /patients/:id
🗄️ Banco de dados

O projeto utiliza SQLite como banco de dados e Prisma ORM para gerenciamento e acesso aos dados.

O modelo Patient possui os seguintes campos:

Campo	Tipo	Obrigatório
id	Int	Sim
name	String	Sim
cpf	String	Sim
birthDate	DateTime	Sim
phone	String	Sim
email	String	Não
address	String	Não
createdAt	DateTime	Sim
updatedAt	DateTime	Sim

O CPF possui uma restrição de unicidade para impedir cadastros duplicados.

⚙️ Como executar o projeto
1. Clone o repositório
git clone URL_DO_REPOSITORIO
2. Acesse a pasta
cd clinicacare-api
3. Instale as dependências
npm install
4. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="file:./dev.db"
5. Gere o Prisma Client
npx prisma generate
6. Execute as migrations
npx prisma migrate dev
7. Inicie o servidor
npm run start:dev

A API estará disponível em:

http://localhost:3000
🧪 Testando a API

Os endpoints podem ser testados utilizando ferramentas como:

Thunder Client
Postman
Insomnia

Exemplo:

GET http://localhost:3000/patients
🔐 Validação

A API utiliza class-validator e ValidationPipe do NestJS para validar os dados recebidos.

Entre as validações implementadas estão:

Campos obrigatórios
Formato de e-mail
Formato de data
Tipagem dos campos
CPF único
🔗 Frontend

O backend foi desenvolvido para funcionar em conjunto com o frontend do ClínicaCare, desenvolvido com:

React
TypeScript
CSS

O frontend consome os endpoints REST disponibilizados por esta API.

📚 Objetivo do projeto

O ClínicaCare está sendo desenvolvido como projeto de estudo e portfólio, com o objetivo de aplicar na prática conceitos de:

Desenvolvimento de APIs REST
NestJS
TypeScript
Arquitetura backend
CRUD
ORM
Banco de dados
Validação de dados
Integração entre frontend e backend
Organização e boas práticas de código
👩‍💻 Desenvolvimento

Projeto desenvolvido por Luana Martins como parte dos estudos em desenvolvimento Full Stack.
