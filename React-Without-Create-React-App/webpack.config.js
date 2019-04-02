const path = require('path');
const HtmlWebpackPlugiin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module:{
       rules: [
           {
               test: /\.js$/,
               eclude: /node_modules/,
               use:{
                   loader: 'babel-loader'
               }
           }
       ]
    }
}