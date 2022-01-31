const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/hello-world.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9001/',
        clean: true
    },
    mode: 'development',
    devServer: {
        port: 9001,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'hello-world.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            title: 'Press Me App',
            meta: {
                description: 'Press Me App description'
            }
        }),
        new ModuleFederationPlugin({
            name: 'PressMeApp',
            filename: 'remoteEntry.js',
            exposes: {
                './PressMeApp': './src/components/hello-world-button/hello-world.js',
                './PressMePage': './src/components/hello-world-page/hello-world-page.js'
            }
        })
    ]
}