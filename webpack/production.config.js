const merge = require('webpack-merge');

const { config } = require('./shared.config');

module.exports = merge(config, {
    entry: {
        app: './client/index.js',
    },
});
