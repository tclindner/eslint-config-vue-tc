const {ESLint} = require('eslint');

describe('test eslint-plugin-test-id', () => {
  test('`v-model` without `data-test-id`', async () => {
    const code = `
      <template>
        <div>
          <test v-model="somedata"> some slot data </test>
        </div>
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
    const expectedErrorLineNum = 4;
    const expectedErrorColumnNum = 11;
    const linter = new ESLint();
    const errors = await linter.lintText(code);
    const error = errors[0].messages[0];

    expect(error.ruleId).toStrictEqual('test-id/data-test-id');
    expect(error.line).toStrictEqual(expectedErrorLineNum);
    expect(error.column).toStrictEqual(expectedErrorColumnNum);
    expect(error.message).toStrictEqual(`Expected 'data-test-id' with v-model.`);
  });

  test('`v-model` with `data-test-id`', async () => {
    const code = `
      <template>
        <div>
          <test v-model="somedata" data-test-id="somedata"> some slot data </test>
        </div>
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
    const expectedErrorLineNum = 6;
    const expectedErrorColumnNum = 18;
    const linter = new ESLint();
    const errors = await linter.lintText(code);
    const error = errors[0].messages[0];

    expect(error.ruleId).toStrictEqual('vue/comment-directive');
    expect(error.line).toStrictEqual(expectedErrorLineNum);
    expect(error.column).toStrictEqual(expectedErrorColumnNum);
    expect(error.message).toStrictEqual('clear');
  });
});
