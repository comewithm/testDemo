const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry : path.join(__dirname,'./src/main.js'),
	output : {
		path : path.join(__dirname,'./dist'),
		filename : 'bundle.js',
	},
	plugins : [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({	
			template : path.join(__dirname,'./src/index.html'),
			filename : 'index.html'	
		}),
		new VueLoaderPlugin()
		
	],
	module: {
		rules : [
			{test:/\.css$/, use:['style-loader','css-loader']},
			{test:/\.less$/, use:['style-loader','css-loader','less-loader']},
			{test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},
			
			{test:/\.(jpg|jpeg|png|gif|bmp)$/, use: 'url-loader?limit=7000&name=[hash:8]-[name].[ext]'},
			{test:/\.(eot|ttf|svg|woff|woff2)$/, use: 'url-loader'},
			{test:/\.js$/, use : 'babel-loader', exclude: /node_modules/},
			{test:/\.vue$/, use : 'vue-loader'}
		]
	},
	resolve :{
		alias : {
			// "vue$" : "../node_modules/vue/dist/vue.js"
		}
	},
	mode : 'development'
}