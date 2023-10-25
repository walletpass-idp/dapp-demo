
<p align="center">
  <a href="https://github.com/walletpass-idp/dapp-demo">
    <span style="display: inline-block; vertical-align: middle;">
      <img alt="NextJS App Router and Passkeys Logo" src="public/logo.png" width="120" />
    </span>
  </a>
</p>

<h1 align="center">
  WalletPass demo Dapp!
</h1>

this repo was forked from the ironsession / authn template here: https://github.com/renchris/app-router-with-webauthn

## 🤝 WalletPass and NextJS



## 📚 Important Libraries




- [Prisma](https://www.prisma.io/) allows for TypeScript type-safe data modelling and database querying connection.

- [renchris' fork of the Iron Session V8 branch](https://github.com/renchris/iron-session/tree/v8-as-dependency)  allows Iron Session to be used with React Server Components and NextJS Server Actions.



## 🚀 Usage

1. **Install project dependencies.**

    Run

    ```bash
    pnpm install
    ```

1. **Set up the Prisma database :**

    Create an `.env` file that contains the values to your database URL and secret cookie password.

    For an external database, you may set up your Prisma database with [PostgreSQL on RDS](https://www.prisma.io/dataguide/postgresql/setting-up-postgresql-on-rds).

    ```
    DATABASE_URL=postgresql://rds-instance-username:rds-instance-password@database-name.instance-id.aws-region.rds.amazonaws.com:5432/postgres
    SECRET_COOKIE_PASSWORD=passwordpasswordpasswordpassword
    ```

    For a local file database, you may set up your Prisma databse with [SQLite](https://www.prisma.io/docs/getting-started/quickstart)

    ```
    DATABASE_URL="file:./dev.db"
    SECRET_COOKIE_PASSWORD=passwordpasswordpasswordpassword
    ```

    If you choose to run a local database file instead, in the `schema.prisma` file, replace the provider from `"postgresql"` to `"sqlite"`

    ```diff
    datasource db {
    -   provider = "postgresql"
    +   provider = "sqlite"
        url      = env("DATABASE_URL")
    }
    ```


1. **Create the Prisma database file.**

    Remove the current migration directory and start a new migration history with prisma migrate dev
    
    Run
    ```bash
    rm -rf prisma/migrations 
    pnpm prisma migrate dev
    ```
    

1. **Run the dapp application.**

    Run
    ```bash
    pnpm dev
    ```

1. **Register a User.**



1. **Login the User.**

    

## 🧐 What's inside?

A quick look at the top-level files and directories where we made our feature changes in the project.

    lib
    ├── cookieActions.ts
    ├── database.ts
    ├── prisma.ts
    ├── walletpass.ts
    └── session.ts
    prisma
    └── schema.prisma
    src
    └── app
         └── components
            ├── LandingPage.tsx
            └── LogoutButton.tsx

1. **`/lib`**: This directory will contain all of the `use server` internal functions that our components and functions will use.

1. **`lib/cookieActions.ts`**: This file contains the functions that read and write encrypted cookies to and from cookie storage.

1. **`lib/database.ts`**: This file contains the functions that read and write data to and from our Prisma database.

1. **`lib/prisma.ts`**: This file sets up the Prisma Client that is used by Prisma functions in the `/lib/database.ts` file.


1. **`lib/session.ts`**: This file sets up the Iron Session object used by the session functions in the `lib/cookieAction.ts` file.

1. **`prisma.schema.ts`**: This is the configuration file that sets up Prisma with the database source type and data model definition.

1. **`/src/app`**: This directory will contain all of the code related to what you will see on the front-end of the site. `src` is a convention for “source code” and `app` is the convention for “app router”.

1. **`src/app/components/LandingPage.tsx`**: This `use client` file contains the  page component and client-side functions for the Login Page.


## 📣 Recognition

Thank you to [renchris](https://github.com/renchris) for the v8 ironsession integration with 
nextjs app directory!
