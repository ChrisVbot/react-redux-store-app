const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		"react-hot-loader/patch",
		"webpack-dev-server/client?http://localhost:8080",
		"webpack/hot/only-dev-server",
		"./app/js/index.js"
	],
	output: {
		path: path.resolve(__dirname, 'dev'),
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
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]__[hash:base64:5]',
							camelCase: true

						}
					}
				]
			},
		]
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		contentBase: path.resolve(__dirname, 'dev'),
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'dev/index.html'
		})
	]
}

