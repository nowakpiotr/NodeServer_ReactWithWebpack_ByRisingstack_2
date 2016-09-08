var webpack = require('webpack');
module.exports = {
  // We add an entry to connect to the hot loading middleware from the page
  entry: ['webpack-hot-middleware/client', './src/client/app/index.jsx'],
  output: {
    path: __dirname + '/src/client/public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
// This plugin activates hot loading
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

