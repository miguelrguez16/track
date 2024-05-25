# React project template with Vite, Typescript SWC and Vitest

- [React project template with Vite, Typescript SWC and Vitest](#react-project-template-with-vite-typescript-swc-and-vitest)
  - [Content](#content)
    - [Init vite project](#init-vite-project)
  - [Install all dependencies](#install-all-dependencies)
    - [Start](#start)
  - [Build](#build)
  - [Test](#test)
    - [Coverage](#coverage)
  - [Run in Production Environment](#run-in-production-environment)
  - [VSCODE folder](#vscode-folder)
  - [Resources](#resources)

## Content

App built using Vite framework.
![vite](public/vite.svg)![react](public/react.svg)![typescript](public/typescript.svg)![vitest](public/vitest.svg)

### Init vite project

`npm create vite@latest`

## Install all dependencies

`npm install`

### Start

`npm run dev`

## Build

`npm run build`

## Test

`npm run test`

### Coverage

`npm run coverage`

Full coverage report in coverage folder `file:///C:/PATH_REPOSITORY/coverage/index.html`

This command will create a new folder "dist" where all Javascript will be bundled.

## Run in Production Environment
  
1. `npm run build`
2. If we have NOT already installed serve command. Here is the command
    1. `npm install -g serve`
3. `serve -s .\dist\`

## VSCODE folder

Global Settings for all users:

## Resources

[Vite](https://vitejs.dev/guide/)
[What is SWV](https://swc.rs/)
[JEST AND VITE](https://jestjs.io/docs/getting-started)
[VITEST](https://vitest.dev/guide/)


