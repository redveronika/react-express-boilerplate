const webpack = require('webpack');
const merge = require('webpack-merge');

const config = require('./shared.config').config;

module.exports = merge(config, {
    entry: {
        app: ['react-hot-loader/patch', './client/index.js', 'webpack-hot-middleware/client', 'webpack/hot/dev-server'],
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', 'map'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
