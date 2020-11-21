const { resolve } = require('path')

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    }
}