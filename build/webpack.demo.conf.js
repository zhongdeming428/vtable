const isDev = process.env.NODE_ENV === 'demo:dev',
	{ resolve } = require('path'),
	baseConfig = require('./webpack.base.conf'),
	merge = require('webpack-merge')
	cleanWebpackPlugin = require('clean-webpack-plugin'),
	htmlWebpackPlugin = require('html-webpack-plugin')

let config = merge(
	baseConfig,
	{
		mode: isDev ? 'development' : 'production',
		entry: {
			app: resolve(__dirname, '../demo/index.js'),
			vendors: ['vue']
		},
		output: {
			filename: '[name]_[hash:8].js',
			path: resolve(__dirname, '../demo/dist')
		},
		devtool: isDev ? 'cheap-inline-source-map' : 'source-map',
		plugins: [
			new cleanWebpackPlugin(),
			new htmlWebpackPlugin({
				title: 'vTable Demo',
				template: resolve(__dirname, '../index.html')
			})
		]
	}
)

if (isDev) {
	config.devServer = {
		open: true,
		contentBase: resolve(__dirname, '../demo/dist'),
		port: 8080
	}
}

module.exports = config