const a11y = require.resolve('./rules/a11y');
const vue = require.resolve('./rules/vue');
const vuex = require.resolve('./rules/vuex');
const testId = require.resolve('./rules/test-id');

module.exports = {
  extends: ['plugin:vue/base', 'plugin:vue/recommended', a11y, vue, vuex, testId],
  plugins: ['vue', 'vuejs-accessibility', 'test-id'],
  env: {
    es6: true,
  },
  overrides: [
    {
      files: ['**/test/**/*.spec.{j,t}s?(x)', '**/test/**/*.test.{j,t}s?(x)'],
      env: {
        jest: true,
      },
      rules: {
        'vue/one-component-per-file': 'off',
      },
    },
  ],
};
