# File Downloader

## Setup

Simply run `npm install` to get all dependencies installed.

This application is setup with pre-commit hooks, using Husky, to ensure code quality is to the highest standard.

If VSCode/VSCodium is being used for development, it is recommended to download the EditorConfig, Prettier, ESLint, and stylelint extensions for a better experience.

## Commands

`start-dev`: Starts the local server for development

`build-dev`: Builds the code for deployment to dev servers

`build-prod`: Builds the code for deployment to prod servers

`build-stats`: Creates a stats file to analyze for bundle build sizes

`analyze`: Opens a browser window to show the stats outputted from `build-stats` command

`code-lint`: Runs ESLint on the specified directory (used during deployment)

`style-lint`: Runs stylelint on the specified directory without emitting (used during deployment)

`test`: Opens Cypress for testing the application


## Base application

The base application includes React, Typescript, reactstrap, Recoil, and Font Awesome.

The `@loadable/component` library also has been included as a part of this base application if dynamic loading is desired.

`styles`: Directory that contains all styling for the base application

`src`: Directory that contains all source code for the base application

`src/components`: Directory that contains single use components specific to the application (layout components, headers, footers, etc)

`src/pages`: Directory that contains all the various pages that will be a part of the application

`src/shared`: Directory containing any sort of helper functions used throughout the entire application code along with any components that will be getting re-used

### Application Adjustments

Please make any fine tuning adjustments for the application within `webpack.config.js`, `.babelrc`, `tsconfig.json`.

For linter adjustments, please check out `.eslintrc`, `.eslintignore`, `.prettierrc`, `.stylelintrc`.

To adjust the formatting done with EditorConfig, please check out `.editorconfig`.

### Webpack Aliases

Please check out the `webpack.config.js` file to see which directories have aliases assigned, which will allow easier imports for using the various components.

## Cypress

Cypress is used for testing. Please check out the `cypress` directory for any development related to it along with the `cypress.json` file for configuration. Component testing is done using the `@cypress/react` plugin. For more information, check out the Cypress Documentation.

## Best Practices

Do the imports in the following order:

React
NPM libraries (fontawesome, react-bootstrap react-router, etc)
Custom components
Shared helpers
Component specific helpers
Shared constants
Component specific constants
Shared types
Component specific types
