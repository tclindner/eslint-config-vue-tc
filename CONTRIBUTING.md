# Contributing

## System Dependencies

### Node

* [Node.js](https://nodejs.org/) - v18.0.0+
* [npm](https://www.npmjs.com/) - v9.0.0+

## Install project dependencies

### Code

* Fork and clone the eslint-config-vue-tc repo

### Install project dependencies

`npm install`

This installs dependencies from `package.json`.

### Run the build locally

`npm run lint`

This will:

* run linters (npmpackagejsonlint and eslint)

`npm test`

This will:

* run all of the jest tests

## Code guidelines

### JavaScript
eslint-config-vue-tc utilizes both ESLint to enforce JavaScript standards. Please see the `.eslintrc.json` file for config.

* [eslint](https://github.com/eslint/eslint)

### Checking coding style
Run `npm run lint` before committing to ensure your changes follow our coding standards.

## Versioning
Please use the following commands to increment the version number
Ex: Assume current version is 0.0.1

`npm --no-git-tag-version version patch`

If you run this command the version will increase the patch number (ie 0.0.2)

`npm --no-git-tag-version version minor`

If you run this command the version will increase the minor number (ie 0.1.0)

`npm --no-git-tag-version version major`

If you run this command the version will increase the major number (ie 1.0.0)

## EditorConfig
EditorConfig helps maintain consistent file formatting between different editors and developers. Please [install the plugin for you editor of choice](http://editorconfig.org/#download). Please see the `.editorconfig` file at the root of this repo to see what settings are enforced.

## License

Contributions to eslint-config-vue-tc are subject to the [MIT License](https://github.com/tclindner/eslint-config-vue-tc/blob/master/LICENSE).
