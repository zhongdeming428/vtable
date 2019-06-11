const baseConfig = require('./webpack.base.conf'),
	merge = require('webpack-merge'),
	{ resolve } = require('path'),
	cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(
	baseConfig,
	{
		mode: 'production',
		devtool: 'sourcemap',
		output: {
			filename: '[name].js',
			path: resolve(__dirname, '../dist'),
			library: 'vTable',       // 模块名称
			libraryTarget: 'umd',   // 输出格式
			umdNamedDefine: true    // 是否将模块名称作为 AMD 输出的命名空间
		},
		plugins: [
			new cleanWebpackPlugin()
		]
	}
)