# Turborepo / Next.js / TypeScript / Material UI 


## Requirements

- [Node v18+](https://nodejs.org/)

## Running

_Easily set up a local development environment_

- `npm install`
- `npm run dev` - Start all NextJs apps 🚀

Visit one of the monorepo apps [localhost:3100](http://localhost:3100/)


## Commands

Bellow commands will be executed on monorepo level - on all apps and packages where npm script exists.

| Command             | Description                                                                         |
| ------------------- | ----------------------------------------------------------------------------------- |
| prepare             | Setup git hooks with Husky (executes on npm install)                                |
| build               | Build all apps and packages (`build-next-static`, `dist`)                           |
| dev                 | Start all apps                                                                      |
| lint                | Lint all apps and packages                                                          |
| lint-staged-husky   | Run prettier and lint on staged files                                               |
| tsc                 | Run TypeScript compiler                                                             |
| test                | Run tests on all apps and packages                                                  |
| format-lint         | Lint formatting with Prettier                                                       |
| format-fix          | Fix formatting with Prettier                                                        |
| commit              | Run Commitizen on staged file                                                       |
| clean               | Remove installed, generated and cached folders (node_modules, coverage, .next etc.) |
| remove-turbo-cache  | Removes Turborepo local cache                                                       |
| update-dependencies | Update dependencies to their latest versions                                        |
| generate-prisma     | Update prisma db client typings                                                     |

## Conventions

Convention over configuration should be followed as much as possible as described in [Conventions.md](https://github.com/Installion-GmbH/installion-tools/blob/main/README_CONVENTIONS.md)

## Monorepo

Monorepo features and conventions:

- Monorepo is being quite highly opinionated in order to achieve best developer experience. It's meant to be used as frontend only monorepo, 100% TypeScript, Material UI support (UI component library, shared theme across all apps and packages etc.), consistent codebase across whole monorepo with automated tooling in place as ESLint, Prettier, TypeScript, conventional commits etc.
- Workspaces:
  - It comes with three workspaces `client/apps`, `packages` and `server`.
  - All configurations (eslint, jest, material ui etc.) in `packages` are always prefixed with "config-" and imported into other workspaces.
- All applications in monorepo are built with Next.js.
- All Next.js applications are [statically exported](https://nextjs.org/docs/advanced-features/static-html-export).
- Monorepo doesn't include any implementation of micro-frontend architecture, but is prepared with that in mind, so it can be easily extended (adding shared state, page composition etc.)

[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[ci-badge]: https://github.com/Installion-GmbH/installion-tools/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/Installion-GmbH/installion-tools/actions/workflows/ci.yml

<!-- Deployments  App Tracking-->

[deploy-app-tracking-prod-badge]: https://img.shields.io/badge/app--tracking-prod-blue?logo=netlify&logoColor=white
[deploy-app-tracking-prod-url]: https://status.installion.eu/

<!-- Deployments  App Projec file-->

[deploy-app-file-prod-badge]: https://img.shields.io/badge/app--file-prod-blue?logo=netlify&logoColor=white
[deploy-app-file-prod-url]: https://installion-project-file.netlify.app/
