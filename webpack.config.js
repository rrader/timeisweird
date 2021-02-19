const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    experiments: {
        syncWebAssembly: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "./timeisweird-wasm"),
            outName: "timeisweird",
            outDir: path.resolve(__dirname, './timeisweird-wasm/pkg'),
            // extraArgs: "--target web"
        })
        // new webpack.ProvidePlugin({
        //     TextDecoder: ['text-encoding', 'TextDecoder'],
        //     TextEncoder: ['text-encoding', 'TextEncoder']
        // })
    ],
    mode: 'development'
    // Have this example work in Edge which doesn't ship `TextEncoder` or
    // `TextDecoder` at this time.
    // module: {
    //     rules: [
    //         { test: /\.wasm$/, use: ['wasm-loader'] }
    //     ]
    // }
};
