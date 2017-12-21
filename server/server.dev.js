const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack/development.config.js');
const webpackCompiler = webpack(webpackConfig);

function useWebpackMiddleware(app) {
    app.use(webpackDevMiddleware(webpackCompiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true,
            chunks: false,
            'errors-only': true,
        },
    }));
    app.use(webpackHotMiddleware(webpackCompiler, {
        log: console.log,
    }));

    return app;
}

module.exports = {
    useWebpackMiddleware: useWebpackMiddleware,
};
