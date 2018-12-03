const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                options: {
                    configFile: 'tsconfig.json',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'static/js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/'),
        port: 3000,
        historyApiFallback: {
            index: '/',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
}
