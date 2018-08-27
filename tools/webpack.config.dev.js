var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {test: /\.scss|\.sass|\.css$/, use: ["style-loader", "css-loader", "sass-loader"], exclude: /node_modules/},
            {test: /\.ttf$|\.otf$|\.eot$|\.woff$|\.woff2$/, use: "url-loader?limit=100000"},
            {test: /\.jpe?g$|\.png$/, use: "file-loader"},
            {test: /\.svg$/, use: "svg-inline"},
            {test: /load-image/, use: 'imports?define=>false'},
            {test: /\.json$/, use: "json-loader"},
            {test: /\.jsx?$/, exclude: /(node_modules)/, use: [{loader: 'babel-loader', options: { presets: [['@babel/preset-env']]}}]}
        ]
    },
    output: {
        path: "/Users/julianbrendl/Projects/jb/jbsite-react/dev",
        filename: "bundle.min.js"
    },
    mode: 'development',
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new CopyWebpackPlugin([
            { from: 'static'}
        ])
    ]
};