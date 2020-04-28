'use strict';

const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
    search: path.resolve(__dirname, './src/search.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 10240,
            outputPath: 'static/images',
            publicPath: 'static/images/',
            name: '[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            limit: 10240,
            outputPath: 'static/fonts',
            publicPath: 'static/fonts/',
            name: '[name].[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      title: 'index',
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      title: 'search',
      filename: 'search.html',
      chunks: ['search'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3003
  }
}
