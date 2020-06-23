const Path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: Path.resolve(__dirname, '../src/scripts/index.js')
    },
    output: {
        path: Path.join(__dirname, '../build'),
        filename: 'js/[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {from: Path.resolve(__dirname, '../static'), to: 'static'}
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: Path.resolve(__dirname, '../src/templates/index.njk'),
            minify: {
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'test.html',
            template: Path.resolve(__dirname, '../src/templates/test.njk'),
            minify: {
                collapseWhitespace: false
            }
        }),
    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src'),
            '@': Path.resolve(__dirname, '../'),
        }
    },
    module: {
        rules: [
            {
                test: /\.njk$/,
                use: [
                    {
                        loader: 'simple-nunjucks-loader',
                        options: {
                            searchPaths: [
                                './src/templates/'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            {
                test: /\.svg$/,
                use: [
                    'svg-sprite-loader',
                    'svgo-loader'
                ]
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            },
        ]
    }
};
