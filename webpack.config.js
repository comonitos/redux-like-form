const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './components/app.js',
   output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'public')
   },
   module: {
       rules: [
           {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: "babel-loader"
               }
           },
           {
               test: /\.(sa|sc|c)ss$/,
               use: [
                   {
                       loader: MiniCssExtractPlugin.loader,
                       options: {
                           publicPath: path.resolve(__dirname, 'public'),
                       },
                   },
                   'css-loader',
                   'sass-loader',
               ],
           },
       ]
   },
   plugins: [new MiniCssExtractPlugin()],
};