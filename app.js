require('jsx-require-extension');

var app = require('koa')(),
    path = require('path'),
    bodyParser = require('koa-better-body'),
    router = require('koa-router')(),
    static = require('koa-static-cache'),
    hbs = require('koa-hbs'),
    logger = require('koa-logger'),
    controller = require('./assets/controller');

hbs.registerHelper('json', function (value){
  return JSON.stringify(value);
});

app.use(logger());

app.use(bodyParser({
  extendTypes: {
    json: ['application/hal+json']
  },
  multipart: false
}));

app.use(hbs.middleware({
  viewPath: __dirname + '/public',
  disableCache: true
}));

app.use(static(path.join(__dirname, 'public'), {
  gzip: true,
  buffer: false
}));

app.use(function *(next) {
  this.controller = controller;
  yield next;
});

app.use(router.routes())
  .use(router.allowedMethods());

app.use(function *() {
  var render = yield controller.init(controller, this);
  yield render;
});

module.exports = app;
