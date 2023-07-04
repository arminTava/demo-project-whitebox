# project-file

## Requirements

- [Node v18+](https://nodejs.org/)

## Running

_Easily set up a local development environment_

- `npm install`
- `npm run dev` - Start all NextJs apps 🚀

Visit one of the monorepo apps [localhost:3100](http://localhost:3100/)

## Description

- The following are passed as query parameters for the iframe:
  - orderNumber,
  - userId,
  - sessionId
- (Userid and sessionid are written separately to cookies after the first call, so that the page only needs the orderNumber as input afterwards.)
