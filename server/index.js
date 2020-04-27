const path = require('path')
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config');

const app = express();
const compiler = webpack(config);
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = 3003;

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet: true
}));

app.use(express.static(DIST_DIR)) 

app.listen(PORT, () => {
  console.log('成功启动：localhost://'+ PORT)
})
