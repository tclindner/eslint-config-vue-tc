module.exports = {
  rules: {
    'vue/component-definition-name-casing': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/component-tags-order': 'error',
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
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/no-boolean-default': 'error',
    // Add with v7 of eslint-plugin-vue when it is released.
    // 'vue/no-custom-modifiers-on-v-model': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-irregular-whitespace': 'error',
    // Add with v7 of eslint-plugin-vue when it is released.
    // 'vue/no-multiple-template-root': 'error',
    'vue/no-reserved-component-names': 'error',
    // Add with v7 of eslint-plugin-vue when it is released.
    // 'vue/no-v-model-argument': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'error',
    'vue/valid-v-slot': 'error',
    'vue/v-slot-style': 'error',
  },
};
