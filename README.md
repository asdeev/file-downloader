# File Downloader

## Setup

Ensure that Node.js is installed on your machine.

Simply run `npm install` to get all dependencies installed.

This application is setup with pre-commit hooks, using Husky, to ensure code quality is to the highest standard.

If VSCode/VSCodium is being used for development, it is recommended to download the EditorConfig, Prettier, ESLint, and stylelint extensions for a better experience.

## Commands

To run a command, format it as `npm run <command>`.

`start-dev`: Starts the local server for development

`build-dev`: Builds the code for deployment to dev servers

`build-prod`: Builds the code for deployment to prod servers

`build-stats`: Creates a stats file to analyze for bundle build sizes

`analyze`: Opens a browser window to show the stats outputted from `build-stats` command

`code-lint`: Runs ESLint on the specified directory (used during deployment)

`style-lint`: Runs stylelint on the specified directory without emitting (used during deployment)

`test`: Runs Jest for testing the application


## Base application

The base application includes React, Typescript, and Font Awesome.

The `@loadable/component` library also has been included as a part of this base application if dynamic loading is desired.

`styles`: Directory that contains all styling for the base application

`src`: Directory that contains all source code for the base application

`src/components`: Directory that contains various components following the atomic design principle

`src/pages`: Directory that contains all the various pages that will be a part of the application

`src/shared`: Directory containing any sort of helper functions used throughout the entire application code along with any components that will be getting re-used

### Application Adjustments

Please make any fine tuning adjustments for the application within `webpack.config.js`, `.babelrc`, `tsconfig.json`, `jest-config.ts`.

For linter adjustments, please check out `.eslintrc`, `.eslintignore`, `.prettierrc`, `.stylelintrc`.

To adjust the formatting done with EditorConfig, please check out `.editorconfig`.

### Webpack Aliases

Please check out the `webpack.config.js` file to see which directories have aliases assigned, which will allow easier imports for using the various components.

## Jest

Jest is used for testing. Any setup configuration needed can be added to `jest-setup.ts`. Component folders should contain their own tests.
