const path = require("path");
const webpack = require("webpack");
const publicPath = path.resolve("./public/");
const bundlePath = path.resolve("./build/");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: bundlePath,
    publicPath: bundlePath,
    filename: "tic_tac_toe.js"
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: 3000
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
