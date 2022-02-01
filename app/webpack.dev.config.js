const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9000/',
        clean: true
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'app.html',
            writeToDisk: true
        },
        historyApiFallback: {
            index: 'app.html'
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
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'app.html',
            title: 'App'
        }),
        new ModuleFederationPlugin({
            name: 'App',
            remotes: {
                PcApp: 'PcApp@http://localhost:9002/remoteEntry.js',
                PressMeApp: 'PressMeApp@http://localhost:9001/remoteEntry.js',
            }
        })
    ]
}