const webpack = require('webpack')
const path = require('path')

const compiler = webpack({
  mode: 'development',
  devtool: 'source-map',
  target: 'web',
  entry: './index.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    mainFields: ['browser', 'main'],
    preferRelative: false,
    preferAbsolute: true,
  },
})

compiler.run((err, stats) => {
  if (err) {
    return console.error(err)
  }
  if (stats) {
    return console.log(stats.toJson('errors-warnings'))
  }
})
