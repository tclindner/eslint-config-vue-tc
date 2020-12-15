const a11y = require.resolve('./rules/a11y');
const vue = require.resolve('./rules/vue');
const vuex = require.resolve('./rules/vuex');
const testId = require.resolve('./rules/test-id');

module.exports = {
  extends: ['plugin:vue/recommended', a11y, vue, vuex, testId],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['vue', 'vuejs-accessibility', 'test-id'],
  env: {
    es6: true,
  },
};
