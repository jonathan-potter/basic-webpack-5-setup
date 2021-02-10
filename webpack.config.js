const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './js/index.js',
    output: {
        path: __dirname,
        filename: 'build/bundle.js',
    },
    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['.js', '.jsx'],
        alias: {
            /* eslint-disable key-spacing */
            css: path.resolve(__dirname, 'css'),
            js: path.resolve(__dirname, 'js'),
            /* eslint-enable key-spacing */
        }
    },
    devServer: {
        compress: false
    },
    devtool: 'inline-source-map',

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'build/[name].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
};
