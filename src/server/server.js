import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware'; // This line
import config from '../../webpack.config.js';
const app = express();

/*const app = express();
const compiler = webpack(config);
const PATH_DIST = path.resolve(__dirname, '../client/public');
app.use(express.static(PATH_DIST));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler)); // And this line
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});*/

var compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/assets/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
