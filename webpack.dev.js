const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = (env) => ({
    mode: 'development',
    plugins: [
        new ESLintWebpackPlugin(),
        new StylelintWebpackPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, `./dist/${env.PROJECT_NAME}`),
        filename: '[name].js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, `./src/projects/${env.PROJECT_NAME}`),
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
