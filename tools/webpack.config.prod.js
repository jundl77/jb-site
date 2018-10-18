const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const entryPath = path.resolve(__dirname, "../src/index.js");
const outputPath = path.resolve(__dirname, "../build");

const cleanOptions = {
  root: path.resolve(__dirname, "../"),
  verbose: true,
  dry: false
}

module.exports = {
  mode: 'production',
  entry: entryPath,
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
    path: outputPath,
    filename: "bundle.min.js"
  },
  plugins: [
    new CleanWebpackPlugin(outputPath, cleanOptions),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new CopyWebpackPlugin([
      {from: 'static'}
    ]),
  ],
};