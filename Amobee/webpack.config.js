const path = require('path'),
    projectRoot = process.cwd(),
    sourcePath = path.join(__dirname, './src'),
    destPath = path.join(__dirname, './public'),
    ProgressPlugin = require('webpack/lib/ProgressPlugin'),
    CircularDependencyPlugin = require('circular-dependency-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const { DefinePlugin, HotModuleReplacementPlugin, ProvidePlugin, NoEmitOnErrorsPlugin } = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/lib/main.js'
    ],
    target: 'web',
    output: {
        path: `${__dirname}/public/dist/`,
        filename: `bunde.js`
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: destPath + '/index.html',
            template: sourcePath + '/index.html'
        }),
        new CircularDependencyPlugin({
            exclude: /(\\|\/)node_modules(\\|\/)/,
            failOnError: false,
            onDetected: false,
            cwd: projectRoot
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new HotModuleReplacementPlugin(),
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new NoEmitOnErrorsPlugin(),
        new ProgressPlugin()
    ],
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'raw-loader'
            }]
        }, {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    }
}