const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, "../src/index.js"),
  module: {
    rules: [
      {test: /\.scss|\.sass|\.css$/, use: ["style-loader", "css-loader", "sass-loader"], exclude: /node_modules/},
      {test: /\.ttf$|\.otf$|\.eot$|\.woff$|\.woff2$/, use: "url-loader?limit=100000"},
      {test: /\.jpe?g$|\.png$/, use: "file-loader"},
      {test: /\.svg$/, use: "svg-inline-loader"},
      {test: /load-image/, use: 'imports?define=>false'},
      {test: /\.json$/, use: "json-loader"},
      {test: /\.jsx?$/, exclude: /(node_modules)/, use: ['babel-loader', 'eslint-loader']}
    ]
  },
  output: {
    path: path.resolve(__dirname, "../dev"),
    filename: "bundle.min.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new CopyWebpackPlugin([
      {from: 'static'}
    ])
  ]
};