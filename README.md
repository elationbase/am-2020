<p align="center">
  <a href="//montero-design.com">
    <img src="http://montero-design.com/am.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Alvaro Montero
</h1>
<h3 align="center">
  Creative Technologist
</h3>

## 🚀 Quick start
  ```shell
  yarn
  yarn develop
  ```


## :arrow_heading_down: Commiting Changes

This repo enforce `conventional commit` [More info](https://github.com/conventional-changelog/commitlint)

#### Types

Must be one of the following:

**build**: Changes that affect the build system or external dependencies (example scopes: webpack, babel, npm)

**chore** Update tasks, no production code change (example scopes: build, lint, hooks)

**ci**: Changes to our CI configuration files and scripts (example scopes: Jenkins, Travis, Circle)

**docs**: Documentation only changes

**feat**: A new feature

**fix**: A bug fix

**perf**: A code change that improves performance

**refactor**: A code change that neither fixes a bug nor adds a feature

**style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

**test**: Adding missing tests or correcting existing tests

#### Commit message structure

```
<type>(scope): <description>

[optional body]

[optional footer]
```

```
// Simple Example
feat(calendar): added multiyear props to component
```

```
// Extended Example
feat(calendar): added multiyear props to component

- Multiyear prop must be a number
- Two theme styles
- Unit tests and Snapshots

#closes 00
```

---

## :hibiscus: Code formatting & linting

[Prettier](https://prettier.io/) for code formatting. Extension for VS Code can be found [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Prettier configuration can be found in `.prettierrc.js`

[ESLint](https://eslint.org/) for code linting. Extension for VS Code can be found [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

ESLint configuration can be found in `.eslintrc.js`

Codebase linting and testing is done on pre-commit hook level.

## :anger: Test

Project is using [JEST](https://jestjs.io/) for unit testing.

#### Main commands

```
  $ yarn test // Run all tests
  $ yarn test:update // Update Snapshots
  $ yarn test:watch // Watch test for develop
```

#### Other commands

```
  $ yarn test:update // Update Snapshots
  $ yarn test:watch // Watch test for develop
```
