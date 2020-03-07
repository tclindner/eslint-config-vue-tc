module.exports = {
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['jsx'],
        shouldMatchCase: false
      }
    ],
    'vue/max-attributes-per-line': 'off',
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/no-boolean-default': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/require-direct-export': 'error'
  }
};
