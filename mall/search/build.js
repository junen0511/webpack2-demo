process.env.NODE_ENV = 'production'

var pkg = require('./package.json')
var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var appWebpackConfig = require('./webpack.app.conf')

var webpackConfig = appWebpackConfig.buildWebpackConfig
var spinner = ora('building for production...')
spinner.start()

rm(path.resolve(__dirname, '../dist', pkg.name), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan(' Build complete.\n'))
    console.log(chalk.yellow('  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'))
  })
})
