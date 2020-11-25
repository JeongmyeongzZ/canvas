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
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './scroll/index.html',
            filename: './scroll/index.html',
            hash: true,
            chunks: ['scroll']
        }),
        new HtmlWebpackPlugin({
            template: './wave/index.html',
            filename: './wave/index.html',
            hash: true,
            chunks: ['wave']
        }),
    ],
}