const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/image-caption.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9003/',
        clean: true
    },
    mode: 'development',
    devServer: {
        port: 9003,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'image-caption.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'image-caption.html',
            title: 'PC App',
            meta: {
                description: 'PC App description'
            }
        }),
        new ModuleFederationPlugin({
            name: 'ImageCaptionApp',
            filename: 'remoteEntry.js',
            exposes: {
                './ImageCaption': './src/components/image-caption/image-caption.js'
            }
        })
    ]
}