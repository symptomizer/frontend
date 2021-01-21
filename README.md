# Symptomizer

> The frontend of Symptomizer

## Prerequisites

- [Node.js](https://nodejs.org/en/)

  v15.6.0 on macOS Big Sur is confirmed to work.

## Getting Started

1. `git clone git@github.com:symptomizer/frontend.git`
1. `cd frontend`
1. `npm i`
1. `npm run test`

   This will ensure the project is in a good state. It performs linting and formatting, it builds the artifacts, and it runs the tests.

## Project Structure

This project is primarily a [Create React App](https://create-react-app.dev/). It uses [TypeScript](https://www.typescriptlang.org/) to aid the developer experience.

### React App

If you only need to run the React app, you can just run `npm run start`. This auto hot-reloads so is great for developing the UI.

The code can be found in `./src`. It uses [React Router](https://reactrouter.com/web/guides/quick-start) for navigation and [Apollo Client](https://www.apollographql.com/docs/react/) for data transport. The UI itself is predominately built with [Tailwind UI](https://tailwindui.com/).

## FAB

This project is enhanced as a [FAB](https://fab.dev/), which allows us to sprinkle in some server-side functionality. These plugins can be found in the `./api` folder. Right now, there's just a mock GraphQL server, but in the future, we could use this for user authorization etc.

## Testing

Pretty minimal at this point, but CRA comes with [Jest](https://jestjs.io/) built-in and there's one example in `./src/App.test.tsx`.

### Static Testing & Linting

[ESLint](https://eslint.org/) comes pre-installed with CRA, and [Prettier](https://prettier.io/) is setup with [`lint-staged`](https://github.com/okonet/lint-staged) and [`husky`](https://github.com/typicode/husky) so it be run automatically when you `git commit` (along with the Jest tests).

## Deployment

[Linc](https://linc.sh/) is setup to handle the CI/CD pipeline to build and deploy the FAB on [Cloudflare Workers](https://workers.cloudflare.com/). Preview builds happen for every commit, and anything merged into the default branch is deployed to production (currently that's [https://symptomizer.gregbrimble.workers.dev/](https://symptomizer.gregbrimble.workers.dev/), but we'll obviously get setup with a custom domain at some point).
