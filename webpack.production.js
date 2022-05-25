const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map',
  entry: "./index.ts",
  mode: 'production',
  rules: [{
    test: /\.(ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader"
    }
  }],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index",
    libraryTarget: "commonjs"
  },
})