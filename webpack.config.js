const { resolve } = require('path')

module.exports = {
    entry: './wave/app.js',
    output: {
        filename: './wave/app.js',
        path: resolve(__dirname, 'dist')
    }
}