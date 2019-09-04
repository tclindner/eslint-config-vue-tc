module.exports = {
  rules: {
    'vue-a11y/accessible-emoji': 'error',
    'vue-a11y/alt-text': 'error',
    'vue-a11y/anchor-has-content': 'error',
    'vue-a11y/aria-role': [
      2,
      {
        ignoreNonDOM: true
      }
    ],
    'vue-a11y/aria-props': 'error',
    'vue-a11y/aria-unsupported-elements': 'error',
    'vue-a11y/click-events-have-key-events': 'error',
    'vue-a11y/form-has-label': 'error',
    'vue-a11y/heading-has-content': 'error',
    'vue-a11y/iframe-has-title': 'error',
    'vue-a11y/interactive-supports-focus': 'error',
    'vue-a11y/label-has-for': 'error',
    'vue-a11y/media-has-caption': 'error',
    'vue-a11y/mouse-events-have-key-events': 'error',
    'vue-a11y/no-access-key': 'error',
    'vue-a11y/no-autofocus': 'error',
    'vue-a11y/no-distracting-elements': 'error',
    'vue-a11y/no-onchange': 'error',
    'vue-a11y/no-redundant-roles': 'error',
    'vue-a11y/role-has-required-aria-props': 'error',
    'vue-a11y/tabindex-no-positive': 'error'
  }
};
