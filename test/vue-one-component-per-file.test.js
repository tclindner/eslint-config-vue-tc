const {ESLint} = require('eslint');

describe('test vue/one-component-per-file rule', () => {
  test('test file - more than one component is allowed', async () => {
    const linter = new ESLint({
      useEslintrc: false,
      overrideConfigFile: '.eslintrc.json'
    });
    const errors = await linter.lintFiles('**/exampleFiles/testFileWithMultipleComponents.test.js');
    let hasOneComponentPerFileError = false;

    errors.forEach((error) => {
      if (error.messages.find((message) => message.ruleId === 'vue/one-component-per-file')) {
        hasOneComponentPerFileError = true;
      }
    });

    expect(hasOneComponentPerFileError).toStrictEqual(false);
  });

  test('non-test file - more than one component is not allowed', async () => {
    const expectedErrorLineNum = 3;
    const expectedErrorColumnNum = 32;
    const linter = new ESLint({
      useEslintrc: false,
      overrideConfigFile: '.eslintrc.json'
    });
    const errors = await linter.lintFiles('**/exampleFiles/srcFileWithMultipleComponents.js');
    const error = errors[0].messages[4];

    expect(error.ruleId).toStrictEqual('vue/one-component-per-file');
    expect(error.line).toStrictEqual(expectedErrorLineNum);
    expect(error.column).toStrictEqual(expectedErrorColumnNum);
    expect(error.message).toStrictEqual('There is more than one component in this file.');
  });
});
