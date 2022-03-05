// TODO: Remove workaround for https://github.com/facebook/jest/issues/9771
// after Jest v28 is released.
// eslint-disable-next-line import/no-extraneous-dependencies
const enhancedResolve = require('enhanced-resolve');

const resolver = enhancedResolve.create.sync({
  conditionNames: ['require', 'node', 'default'],
  extensions: ['.js', '.json'],
  mainFields: ['exports', 'main', 'require'],
});

module.exports = (request, options) => resolver(options.basedir, request);
