const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');

module.exports = (env) => {
    const mode = env.MODE;
    const common = commonConfig(env);

    switch (mode) {
    case 'build':
        return merge(common, prodConfig(env));
    case 'dev':
        return merge(common, devConfig(env));
    }
};
