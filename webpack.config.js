const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    entry: {
        wave: './wave/app.js',
        scroll: './scroll/app.js',
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
}