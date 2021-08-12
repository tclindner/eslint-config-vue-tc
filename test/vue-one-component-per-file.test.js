const {ESLint} = require('eslint');

describe('test vue/one-component-per-file rule', () => {
  test('testing file - more than one component is allowed', async () => {
    const linter = new ESLint({
      useEslintrc: false,
      overrideConfigFile: '.eslintrc.json',
    });
    const errors = await linter.lintFiles('**/example-files/test-file-with-multiple-components.test.js');
    let hasOneComponentPerFileError = false;

    errors.forEach((error) => {
      if (error.messages.some((message) => message.ruleId === 'vue/one-component-per-file')) {
        hasOneComponentPerFileError = true;
      }
    });

    expect(hasOneComponentPerFileError).toStrictEqual(false);
  });

  test('non-test file - more than one component is not allowed', async () => {
    const expectedErrorLineNum = 9;
    const expectedErrorColumnNum = 39;
    const linter = new ESLint({
      useEslintrc: false,
      overrideConfigFile: '.eslintrc.json',
    });
    const errors = await linter.lintFiles('**/example-files/src-file-with-multiple-components.js');
    const error = errors[0].messages[1];

    expect(error.ruleId).toStrictEqual('vue/one-component-per-file');
    expect(error.line).toStrictEqual(expectedErrorLineNum);
    expect(error.column).toStrictEqual(expectedErrorColumnNum);
    expect(error.message).toStrictEqual('There is more than one component in this file.');
  });
});
