const path = require('path'),
UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    App: path.resolve(__dirname,"src/js/scripts.js")
  },
  output: {
    path: path.resolve(__dirname,"dist/js"),
    filename: "scripts-bundled.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
        new UglifyJsPlugin()
    ]
}
