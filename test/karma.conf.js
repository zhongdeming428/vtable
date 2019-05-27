const webpackTestConfig = require('../build/webpack.test.conf'),
  { resolve } = require('path')

module.exports = function(config) {
  const configuration = {
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'chai'],
    reporters: ['spec', 'coverage'],
    files: [
      { pattern: './index.js', watch: false }
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackTestConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: resolve(__dirname, '../coverage'),
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
        { type: 'html' }
      ]
    },
    client: {
      mocha: {
        timeout: 4000
      }
    }
  };

  config.set(configuration);
};