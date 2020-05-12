[![Staart API](https://raw.githubusercontent.com/staart/staart.js.org/master/assets/svg/api.svg?sanitize=true)](https://staart.js.org/api)

**⚠️ This repository contains a development version of Staart API written using NestJS. This is unsupported, incomplete, and should only be used on your own risk. [Visit stable repository →](https://github.com/staart/api)**

|  | Status |
| - | - |
| Build | [![GitHub Actions](https://github.com/staart/api-v2/workflows/Node%20CI/badge.svg)](https://github.com/staart/api-v2/actions) [![Travis CI](https://img.shields.io/travis/staart/api-v2?label=Travis%20CI)](https://travis-ci.org/staart/api-v2) [![Circle CI](https://img.shields.io/circleci/build/github/staart/api-v2?label=Circle%20CI)](https://circleci.com/gh/staart/api-v2) [![Azure Pipelines](https://dev.azure.com/staart/api-v2/_apis/build/status/staart.api-v2?branchName=master)](https://dev.azure.com/staart/api-v2/_build/latest?definitionId=8&branchName=master) |
| Dependencies | [![Dependencies](https://img.shields.io/david/staart/api-v2.svg)](https://david-dm.org/staart/api-v2) [![Dev dependencies](https://img.shields.io/david/dev/staart/api-v2.svg)](https://david-dm.org/staart/api-v2) ![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/staart/api-v2.svg) [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fstaart%2Fapi-v2.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fstaart%2Fapi-v2?ref=badge_shield) |
| Community | [![Codacy grade](https://img.shields.io/codacy/grade/403c8644e13e47df878156f3658220ce)](https://www.codacy.com/manual/AnandChowdhary/uppload) [![Code maintainability](https://img.shields.io/codeclimate/maintainability/staart/api-v2)](https://codeclimate.com/github/staart/api-v2) [![Contributors](https://img.shields.io/github/contributors/staart/api-v2.svg)](https://github.com/staart/api-v2/graphs/contributors) [![GitHub](https://img.shields.io/github/license/staart/api-v2.svg)](https://github.com/staart/api-v2/blob/master/LICENSE) ![Type definitions](https://img.shields.io/badge/types-TypeScript-blue.svg) |

## Development features

- OpenAPI JSON endpoint and Swagger UI
- [TypeORM](https://github.com/typeorm/typeorm) as database driver wirh ORM
- [CRUD](https://docs.nestjs.com/recipes/crud-utilities) filtering, pagination, sorting, relations, cache
- Authentication
  - Check if password has been pwned

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
- Remove `--forceExit` flag from Jest test, add `afterAll()` to close geolocation
