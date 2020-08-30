const a11y = require.resolve('./rules/a11y');
const vue = require.resolve('./rules/vue');
const vuex = require.resolve('./rules/vuex');

module.exports = {
  extends: ['plugin:vue/recommended', a11y, vue, vuex],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['vue', 'vuejs-accessibility'],
  env: {
    es6: true,
  },
};
