# Blog API

A REST API for two blogging web apps, one that allows authors to create, publish, and manage blog posts and the other that allows readers to consume blog posts and comment on them. 

Note: Frontend apps are work in progress.

---

## Features

### User

- Sign-up: Create an account with a username and a password and an optional Full Name and Role (author/reader)
- Sign-in: Sign-in with the username and password used to register. Authenticates a user already registered to allow more access (eg. commenting) 
- Sign-out

### Blog

- Create a blog post with title, post content, and an optional banner
- Read a single blog post
- Read all blog posts
- Update a blog post's title, post content, banner, publish/unpublish
- Delete a blog post

### Comments

- Create a comment on a blog post: Shows username and time stamp
- Read/show all comments on a blog post
- Update a comment
- Delete a comment

## Tech Stack

### Core

- [Node.js](https://nodejs.org/) (Run-time environment)
- [Express](https://expressjs.com/) (Framework)
- [PostgreSQL](https://www.postgresql.org/) (Relational Database)
- [Prisma](https://www.prisma.io/) (ORM)


## Project Structure

Here is a bird eye view of the folders and files

```
├── LICENSE
├── README.md
├── app.js
├── config/
│   └── index.js
├── controllers/
│   ├── commentControllers.js
│   ├── postControllers.js
│   └── userControllers.js
├── errors/
│   ├── CustomBadGatewayError.js
│   ├── CustomBadRequestError.js
│   ├── CustomConflictError.js
│   ├── CustomForbiddenError.js
│   ├── CustomInternalServerError.js
│   ├── CustomNotFoundError.js
│   ├── CustomServiceUnavailbleError.js
│   └── CustomUnauthorizedError.js
├── main.js
├── middlewares/
│   ├── handleValidationErrors.js
│   └── verifyJwtToken.js
├── package-lock.json
├── package.json
├── prisma/
│   ├── client.js
│   ├── migrations/
│   │   ├── 20250305223442_init/
│   │   │   └── migration.sql
│   │   ├── ...
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── routes/
│   ├── index.js
│   ├── postRouters.js
│   └── userRouters.js
├── tests/
│   ├── postRouters.test.js
│   └── userRouters.test.js
└── validators/
    ├── commentValidators.js
    ├── postValidators.js
    └── userValidators.js
```

#### Notes

The above diagram was created using the `tree` utility on Linux.

To generate one for yourself, first install it, navigate to the root of whatever directory you want to generate for and run the following command:

```bash
tree -I 'node_modules|.git|dist|.vscode|coverage'
```

This command does not show directories and its content listed.

Also, had to manually place `/` at the end of directory names.


## Get Started

> The guide is for Linux machines.

### 1. Clone this repository

Based on how you have setup git on your local machine use any of the following methods.

#### HTTPS

```bash
git clone https://github.com/4bdullah7eeshan/odin-blog-api-backend.git
cd odin-blog-api-backend
```

#### SSH

```bash
git clone git@github.com:4bdullah7eeshan/odin-blog-api-backend.git
cd odin-blog-api-backend
```

#### GitHub CLI

```bash
gh repo clone 4bdullah7eeshan/odin-blog-api-backend
cd odin-blog-api-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Create & Setup A PostgreSQL Database

We need two PostgreSQL databases, one for the main application and another for testing.

We can create and setup a PostgreSQL database either locally on our machine or on a cloud service provider.

#### Local

If you already have PostgreSQL installed on your local machine, do the following:

1. Enter the PostgreSQL shell by tunning `psql` in your terminal.
2. Create a new database by running the following SQL command:

```sql
CREATE DATABASE <your_db_name>;
```

#### Cloud

Here are a few free cloud database providers:

- [Neon](https://neon.tech/)
- [Supabase](https://supabase.com/)


Check their documentation for their guides.

### 4. Setup Environment Variables

#### 4.1. Create a `.env` file

At the root of this project create a `.env` file

```bash
touch .env
```

### 4.2. Set the following

```
NODE_ENV="development"
PORT="3000"
DATABASE_URL="postgresql://<owner>:<password>@localhost:5432/<db_name>?schema=public"
TEST_DATABASE_URL="postgresql://<owner>:<password>@localhost:5432/<test_db_name>?schema=public"
JWT_SECRET="<>"
```

##### Learn more

- [Connect your database using JavaScript and PostgreSQL | Prisma Documentation](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-node-postgresql)

### 5. Run Migration

Run the following on your command line:

```bash
npx prisma migrate dev --name init
```

#### Explanation

Inside the `prisma` directory at the root, there exists a `schema.prisma` file.

This file houses the data model design.

We need to map this data model to our actual PostgreSQL database that we setup so that the tables are created.

For this, we need to use the `prisma migrate` CLI command.

The above command does the following *two* things:

1. It creates a new SQL migration file for this migration
2. It runs the SQL migration file against the database


### 6. Start The Express Server

Run the following:

```bash
npm dev
```

#### Explanation

I setup the following script in `package.json` file

```json
"scripts": {
    "dev": "NODE_ENV=development && node --watch main.js",
},
```

Running the above command will do the following *two* things:

1. Set up the environment as a development environment by setting the `NODE_ENV` environment variable to the value of `development`.
2. Runs `node --watch main.js`, which actually starts the Express server. The `--watch` flag auto-restarts the server upon any file changes.

##### Know more

- [--watch](https://nodejs.org/docs/latest-v20.x/api/cli.html#--watch)


## Contact

Contact me through email [4bdullah7eeshan@gmail.com](mailto:4bdullah7eeshan@gmail.com) for any questions or feedback.


## Maintainers

Currently this repository is maintained just by me. In future, I plan to open contributions.

## Pending Tasks

### Testing

- Caching is there. So research how it might work in testing files.
- Finally...work on the test files. That's all. I guess.
- Need to sort Prisma migrations for testing env

## License

This project is licensed under the Apache License, Version 2.0 (the “License”).

You can do (nearly) anything you want with the code, with very few exceptions. A copy of the License is provided in the LICENSE file in this repository.

## Background

This work was done as part of [The Odin Project](https://www.theodinproject.com/)'s [Blog API](https://www.theodinproject.com/lessons/node-path-nodejs-blog-api) project.

### To Odinites

Thanks for being here :heart: !

I have revisited this project the second time to gain a deeper understanding of most of the things involved in the creating of a REST API.

This project was a very simple and a small one. Hence, it allowed me to think about all the various pieces. 

It also serves as a good template for all REST API related projects in the [Node.js](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs) path.


