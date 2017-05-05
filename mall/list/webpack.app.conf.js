var pkg = require('./package.json')
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var proWebpackConfig = require('../../build/webpack.prod.conf')
var _devWebpackConfig = require('../../build/webpack.dev.conf')

function resolve(dir) {
  return path.join(__dirname, dir)
}

var baseOption = {
  output: {
    path: path.resolve(__dirname, '../dist', pkg.name)
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('src')]
    }]
  }
}

var buildWebpackConfig = merge(proWebpackConfig, baseOption)
var devWebpackConfig = merge(_devWebpackConfig, baseOption)

buildWebpackConfig.plugins.push(new CopyWebpackPlugin([{
  from: './static',
  to: '../dist',
  ignore: ['.*']
}]))

module.exports = {
  buildWebpackConfig,
  devWebpackConfig
}
