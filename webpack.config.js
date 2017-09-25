"use strict";
exports.__esModule = true;
var webpack_1 = require("webpack");
var path_1 = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin';
exports["default"] = {
    entry: ['react-hot-loader/patch', './src/client'],
    output: {
        filename: '[name].bundle.js',
        path: path_1.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:7000/dist/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css)$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1, modules: true }
                        },
                        'postcss-loader',
                    ]
                }))
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        port: 7000,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new webpack_1.optimize.OccurrenceOrderPlugin(true),
        new webpack_1.HotModuleReplacementPlugin(),
        new webpack_1.NamedModulesPlugin(),
        new webpack_1.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('[name].bundle.css'),
        // new UglifyJSPlugin(),
        new webpack_1.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
    ]
};
