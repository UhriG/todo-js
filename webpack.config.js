const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
		minimize: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '/dist'),
			watch: true,
		},
		historyApiFallback: true,
		open: true,
		compress: true,
		hot: true,
		port: 8080,
		liveReload: true,
		watchFiles: ['src/*.html'],
	},
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: false,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /styles\.css$/,
			},
			{
				test: /styles\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					// Disables attributes processing
					sources: false,
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false,
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html',
			inject: 'body',
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[name].css',
			ignoreOrder: false,
		}),
		new CopyPlugin({
			patterns: [{ from: 'src/assets', to: 'assets/' }],
		}),
	],
};
