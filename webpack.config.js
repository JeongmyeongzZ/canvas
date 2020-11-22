const {resolve} = require('path')

module.exports = {
    entry: {
        wave: './wave/app.js',
        scroll: './scroll/app.js',
    },
    output: {
        filename: './[name].js',
        path: resolve(__dirname, 'dist')
    }
}