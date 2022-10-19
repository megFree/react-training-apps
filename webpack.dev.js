const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new ESLintWebpackPlugin(),
        new StylelintWebpackPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
        ],
    },
});
