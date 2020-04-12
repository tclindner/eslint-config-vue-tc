module.exports = {
  rules: {
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          // vuex
          'state',
        ],
      },
    ],
  },
};
