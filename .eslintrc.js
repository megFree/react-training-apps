module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard',
    ],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: ['error', 4],
        'react/prop-types': ['off'],
        'no-extra-semi': ['off'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'space-before-function-paren': ['error', 'never'],
    },
};
