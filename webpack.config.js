const {resolve} = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        wave: './wave/app.js',
        scroll: './scroll/app.js',
    },
    output: {
        filename: './[name].js',
        path: resolve(__dirname, 'dist')
    },
    // resolve: {
    //     alias: {
    //         "TweenLite": resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
    //         "TweenMax": resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
    //         "TimelineLite": resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
    //         "TimelineMax": resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
    //         "ScrollMagic": resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
    //         "animation.gsap": resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
    //         "debug.addIndicators": resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
    //     }
    // }
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
    // plugins: [
    //     new HtmlWebpackPlugin(),
    // ],
}