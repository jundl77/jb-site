var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  module: {
    loaders: [
      {test: /\.scss|\.sass|\.css$/, loaders: ["style", "css", "sass"], exclude: /node_modules/},
      {test: /\.ttf$|\.otf$|\.eot$|\.woff$|\.woff2$/, loader: "url-loader?limit=100000"},
      {test: /\.jpe?g$|\.png$/, loader: "file-loader"},
      {test: /\.svg$/, loader: "svg-inline"},
      {test: /load-image/, loader: 'imports?define=>false'},
      {test: /\.json$/, loader: "json-loader"},
      {test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel-loader'}
    ]
  },
  output: {
    path: "./build",
    filename: "bundle.min.js"
  },
  alias: {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new CopyWebpackPlugin([
      {from: 'static'}
    ]),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
  ]
};