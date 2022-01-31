const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/pc.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9002/',
        clean: true
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
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
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
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