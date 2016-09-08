import path from 'path';  
import express from 'express';  
import webpack from 'webpack';  
import webpackMiddleware from 'webpack-dev-middleware'; 
import webpackHotMiddleware from 'webpack-hot-middleware'; // This line  
import config from '../../webpack.config.js';

const app = express();  
const compiler = webpack(config);
const PATH_DIST = path.resolve(__dirname, '../client/public');
app.use(express.static(PATH_DIST));  
app.use(webpackMiddleware(compiler));  
app.use(webpackHotMiddleware(compiler)); // And this line  
app.get('*', function response(req, res) {  
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});

