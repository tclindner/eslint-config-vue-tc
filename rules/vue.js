module.exports = {
  rules: {
    'vue/component-name-in-template-casing': 'error',
    'vue/dot-location': 'error',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/keyword-spacing': 'error',
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['jsx'],
        shouldMatchCase: false,
      },
    ],
    'vue/max-attributes-per-line': 'off',
    // This is turned off for compatibility with Prettier
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-boolean-default': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-unregistered-components': 'off',
    'vue/no-unused-properties': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'error',
  },
};
