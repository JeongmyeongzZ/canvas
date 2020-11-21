const { resolve } = require('path')

module.exports = {
    entry: './app.js',
    output: {
        filename: 'app.js',
        path: resolve(__dirname, 'dist')
    }
}