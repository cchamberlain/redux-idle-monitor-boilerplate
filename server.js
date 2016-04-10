'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = undefined;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(require('morgan')('short'));

var start = exports.start = function start() {
  var webpack = require('webpack');
  var webpackConfig = require('./webpack/common.config');
  var compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(require('webpack-hot-middleware')(compiler, { log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000 }));

  app.use(_express2.default.static(__dirname + '/'));

  app.get(/.*/, function root(req, res) {
    res.sendFile(__dirname + '/index.html');
  });

  var server = _http2.default.createServer(app);
  server.listen(process.env.PORT || 3000, function () {
    var address = server.address();
    console.log('Listening on: %j', address);
    console.log(' -> that probably means: http://localhost:%d', address.port);
  });
};
