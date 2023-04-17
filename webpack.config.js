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
    devtool: 'inline-source-map', //source mapping keeps track of where all the modules came from so you can see in the browser, where exactly the errors came from 
    devServer: {
        static: path.resolve(__dirname, 'dist'), //location for all the files
        port: 8080,
        open: true, //open default browser
        hot: true, //hot module reloading, compiles changes & puts them in memory
        watchFiles: [path.resolve(__dirname, 'src')],

    },
    //loaders handle all files other than js files
    module: {
        rules: [
            //css
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //images
            { test: /\.(svg|ico|png|jpg|jpeg|webp|gif)$/, type: 'asset/resource' },
            //js for babel 
            {
                //test js files not inside node_modules with babel so older browsers can understand the code 
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