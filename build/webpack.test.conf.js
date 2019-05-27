const { resolve } = require('path'),
  { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: resolve(__dirname, '../src/index.js'),
  // output: {
  //   filename: '[name]_[hash:8].js',
  //   path: resolve(__dirname, '../dist')
  // },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.common.js',
      src: resolve(__dirname, '../src')
    },
    extensions: ['.js', '.json', '.css', '.vue', '*']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'vue-style-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}