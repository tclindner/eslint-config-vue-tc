# eslint-config-vue-tc

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Vue projects

[![license](https://img.shields.io/github/license/tclindner/eslint-config-vue-tc.svg?maxAge=2592000&style=flat-square)](https://github.com/tclindner/eslint-config-vue-tc/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/eslint-config-vue-tc.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/eslint-config-vue-tc)
![ci](https://github.com/tclindner/eslint-config-vue-tc/workflows/ci/badge.svg?branch=master)
[![Dependency Status](https://david-dm.org/tclindner/eslint-config-vue-tc.svg?style=flat-square)](https://david-dm.org/tclindner/eslint-config-vue-tc)
[![devDependency Status](https://david-dm.org/tclindner/eslint-config-vue-tc/dev-status.svg?style=flat-square)](https://david-dm.org/tclindner/eslint-config-vue-tc#info=devDependencies)

## What is eslint-config-vue-tc?

Shared configuration for ESLint. Follow the instructions below to easily include this configuration in another project without having to duplicate the file!

# How do I install it?

First thing first, let's make sure you have the necessary pre-requisites.

### System Dependencies

#### Node

* [Node.js](https://nodejs.org/) - v14.0.0+
* [npm](http://npmjs.com) - v6.0.0+

### Command

```bash
npx install-peerdeps --dev eslint-config-vue-tc
```

> eslint and eslint-plugin-vue are peer dependencies and must be installed.

**This module works best when paired with [`eslint-config-tc`](https://github.com/tclindner/eslint-config-tc). Please follow its install instructions.**

## Usage

Add the following to your `.eslintrc.json` file:

```json
{
	"extends": "eslint-config-vue-tc"
}
```

If you need to override a rule, your `.eslintrc.json` file should look like the example below. All shared rules will be used, but `vue/require-direct-export` will be turned off.

```json
{
	"extends": "eslint-config-vue-tc",
	"rules": {
		"vue/require-direct-export": "off"
	}
}
```

## Related

- [eslint-config-tc](https://github.com/tclindner/eslint-config-tc) - ESLint shareable config for JavaScript projects

## Contributing

Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## Change Log

Please see the [CHANGELOG.md](CHANGELOG.md) for more information.

## License

Copyright (c) 2019-2022 Thomas Lindner. Licensed under the MIT license.
