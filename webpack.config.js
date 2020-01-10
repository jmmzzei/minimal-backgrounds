const path = require('path')
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 

module.exports = {
    entry: path.resolve(__dirname,'./src/js/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module : {
        rules: [
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ]
          }
        ]
      },
    plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          filename:'index.html',
          template: './src/index.html',
          hash: true,
            minify: {
              //all to true
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: './css/style.css'
        }),
        new webpack.LoaderOptionsPlugin({
          options: {
              postcss: [
                  autoprefixer()
              ]
          }
      }),
    ]
}