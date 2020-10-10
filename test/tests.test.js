const eslint = require('eslint');
const isPlainObj = require('is-plain-obj');
const eslintConfig = require('..');

describe('eslint config tests', () => {
  describe('eslint object', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig)).toBe(true);
    });
  });

  describe('parserOptions', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig.parserOptions)).toBe(true);
    });
  });

  describe('env', () => {
    test('should be an array', () => {
      expect(isPlainObj(eslintConfig.env)).toBe(true);
    });
  });

  describe('run eslint and make sure it runs', () => {
    test('eslint should run without failing', () => {
      const code = `<template>
      <CoolComponent />
    </template>
    <script>
    export default {
      components: {
        CoolComponent
      }
    }
    </script>
`;
      const expectedErrorLineNum = 2;
      const expectedErrorColumnNum = 7;
      const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: '.eslintrc.json',
      });
      const errors = linter.executeOnText(code).results[0].messages;
      const error = errors[0];

      expect(error.ruleId).toStrictEqual('vue/no-unregistered-components');
      expect(error.line).toStrictEqual(expectedErrorLineNum);
      expect(error.column).toStrictEqual(expectedErrorColumnNum);
      expect(error.message).toStrictEqual('The "CoolComponent" component has been used but not registered.');
    });
  });
});
