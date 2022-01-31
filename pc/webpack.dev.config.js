const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/pc.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9002/',
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
        new ModuleFederationPlugin({
            name: 'PcApp',
            filename: 'remoteEntry.js',
            exposes: {
                './PcPage': './src/components/pc-page/pc-page.js'
            }
        })
    ]
}