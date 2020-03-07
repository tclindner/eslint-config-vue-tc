module.exports = {
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/dot-location': 'error',
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
    'vue/keyword-spacing': 'error',
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
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'error',
    'vue/valid-v-slot': 'error',
    'vue/v-slot-style': 'error'
  }
};
