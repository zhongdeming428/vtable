const { resolve } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: resolve(__dirname, '../src/index.js'),
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.common.js',
			src: resolve(__dirname, '../src')
		},
		extensions: [
			'.js',
			'.json',
			'.css',
			'.vue',
			'*'
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
}