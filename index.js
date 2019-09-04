const vue = require.resolve('./rules/vue');
const a11y = require.resolve('./rules/a11y');

module.exports = {
  extends: ['plugin:vue/recommended', vue, a11y],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue', 'vue-a11y'],
  env: {
    es6: true
  }
};
