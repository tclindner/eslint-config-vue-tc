const {ESLint} = require('eslint');
const isPlainObj = require('is-plain-obj');
const eslintConfig = require('..');

describe('eslint config tests', () => {
  describe('eslint object', () => {
    test('should be an object', () => {
      expect(isPlainObj(eslintConfig)).toBe(true);
    });
  });

  describe('env', () => {
    test('should be an array', () => {
      expect(isPlainObj(eslintConfig.env)).toBe(true);
    });
  });

  describe('run eslint and make sure it runs', () => {
    test('eslint should run without failing', async () => {
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
      const expectedErrorLineNum = 3;
      const expectedErrorColumnNum = 16;
      const linter = new ESLint();
      const errors = await linter.lintText(code);
      const error = errors[0].messages[0];

      expect(error.ruleId).toStrictEqual('vue/comment-directive');
      expect(error.line).toStrictEqual(expectedErrorLineNum);
      expect(error.column).toStrictEqual(expectedErrorColumnNum);
      expect(error.message).toStrictEqual('clear');
    });
  });
});
