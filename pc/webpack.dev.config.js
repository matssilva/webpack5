const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/pc.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        clean: true
    },
    mode: 'development',
    devServer: {
        port: 9002,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'pc.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(jpeg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'pc.html',
            title: 'PC App',
            meta: {
                description: 'PC App description'
            }
        }),
    ]
}