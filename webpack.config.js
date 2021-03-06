const path = require('path');
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
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "./timeisweird-wasm"),
            outName: "timeisweird",
            outDir: path.resolve(__dirname, './timeisweird-wasm/pkg'),
        })
    ],
    mode: 'development',
};
