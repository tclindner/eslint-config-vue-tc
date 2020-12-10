const eslint = require('eslint');

describe('test eslint-plugin-test-id', ()=>{
  test('It shows error of data-test-id rule', ()=>{
    const code = `<template>
      <div>
        <input v-model="somedata" />
      </div
    </template>
    <script>
    export default {
      components: {
        data() {
          return{
            somedata: 'test'
          }
        }
      }
    }
    </script>
    `;
    const expectedErrorLineNum = 1;
    const expectedErrorColumnNum = 1;
    const linter = new eslint.CLIEngine({
      useEslintrc: false,
      configFile: '.eslintrc.json',
    });
    const errors = linter.executeOnText(code).results[0].messages;
    const error = errors[0];

    expect(error.ruleId).toStrictEqual('test-id/data-test-id');
    expect(error.line).toStrictEqual(expectedErrorLineNum);
    expect(error.column).toStrictEqual(expectedErrorColumnNum);
    expect(error.message).toStrictEqual('Expected data-test-id with v-model');
  })
})
