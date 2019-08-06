module.exports = {
  rules: {
    'vue/require-direct-export': 'error',
    'vue/no-empty-pattern': 'off',
    // 'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-boolean-default': 'error',
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['jsx'],
        shouldMatchCase: false
      }
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case']
  }
};
