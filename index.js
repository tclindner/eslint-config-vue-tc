const vue = require.resolve('./rules/vue');

module.exports = {
  extends: ['plugin:vue/recommended', vue],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue'],
  env: {
    es6: true
  }
};
