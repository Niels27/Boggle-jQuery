const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development", //production
    entry: {
        main: path.resolve(__dirname, "src/app.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001,
        open: true,
        hot: true,
        watchFiles: [path.resolve(__dirname, 'src')],

    },
    //loaders
    module: {
        rules: [
            //css
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //images
            { test: /\.(svg|ico|png|jpg|jpeg|webp|gif)$/, type: 'asset/resource' },
            //js for babel that are not in node_modules
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            }
        ],
    },
    //plugins
    plugins: [new HtmlWebpackPlugin({
        title: "Boggle",
        filename: "index.html",
        template: path.resolve(__dirname, "src/temp.html")
    }),
    ],
}