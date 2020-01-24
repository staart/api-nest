[![Staart API](https://raw.githubusercontent.com/staart/staart.js.org/master/assets/svg/api.svg?sanitize=true)](https://staart.js.org/api)

Staart is a Node.js backend starter for SaaS startups written in TypeScript. It has built-in user management and authentication, billing, organizations, GDPR tools, and more.

This branch contains v2 of Staart API written using NestJS.

## New features in v2

- OpenAPI JSON endpoint and Swagger UI
- [TypeORM](https://github.com/typeorm/typeorm) as database driver wirh ORM
- [CRUD](https://docs.nestjs.com/recipes/crud-utilities) filtering, pagination, sorting, relations, cache

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Pre-production

- Remove `"no-console": false` rule from `tslint.json`
- Migrate TSLint to ESLint
