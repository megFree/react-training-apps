const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
    entry: `/src/projects/${env.PROJECT_NAME}/index.js`,
    resolve: {
        alias: {
            '@': path.resolve(__dirname, `./src/projects/${env.PROJECT_NAME}/`),
            '~': path.resolve(__dirname, `./src/projects/${env.PROJECT_NAME}/components`),
            img: path.resolve(__dirname, `./src/projects/${env.PROJECT_NAME}/assets/img`),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/react'],
                    ],
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env'],
                    ],
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./src/projects/${env.PROJECT_NAME}/index.html`,
        }),
    ],
});
