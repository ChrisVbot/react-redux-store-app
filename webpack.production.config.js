const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		"./app/js/index.js"
	],
	output: {
		path: path.resolve(__dirname, 'dist/static'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [ 
					'babel-loader'
				],
			}, 
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[name]__[local]__[hash:base64:5]',
								camelCase: true
							}
						}
					]
				})
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'dev/index.html'
		}),
		new ExtractTextPlugin({
			filename: 'styles.css'
		})
	]
}

