import {
  optimize,
  HotModuleReplacementPlugin,
  NamedModulesPlugin,
  NoEmitOnErrorsPlugin,
  DefinePlugin,
} from 'webpack';
import { resolve } from 'path';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
// import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export default {
  entry: ['react-hot-loader/patch', './src/client'],
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:7000/dist/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: { importLoaders: 1, modules: true },
              },
              'postcss-loader',
            ],
          }),
        ),
        exclude: /\.global.css$/,
      },
      {
        test: /\.global.css$/,
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: { importLoaders: 1, modules: false },
              },
              'postcss-loader',
            ],
          }),
        ),
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 7000,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new optimize.OccurrenceOrderPlugin(true),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('[name].bundle.css'),
    // new UglifyJSPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    }),
  ],
};
