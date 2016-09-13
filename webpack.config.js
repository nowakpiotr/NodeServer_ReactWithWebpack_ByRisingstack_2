var webpack = require('webpack');
module.exports = {
  // We add an entry to connect to the hot loading middleware from the page
  entry: ['webpack-hot-middleware/client?reload=true', './src/client/app/index.jsx'],
  output: {
    path: __dirname + '/src/client/public',
    filename: 'bundle.js',
    publicPath: '/assets/',
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
        }}, {
      test: /\.css?$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }]
  },
// This plugin activates hot loading
plugins: [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]
}
