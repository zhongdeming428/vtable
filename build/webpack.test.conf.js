const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map'
})