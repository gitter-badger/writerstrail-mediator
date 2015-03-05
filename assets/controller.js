var Backbone = require('backbone'),
  Bootstrap = require('./bootstrap'),
  MainRouter = require('./routers/main'),
  apiMap;

apiMap = {};

module.exports = {

  init: function (controller, ctx) {
    return function (callback) {
      this.mainRouter = new MainRouter();
      this.mainRouter.on('route', function (route) {
        this.bootstrap(route, function (data) {
          var markup = this.mainRouter[route]();
          var generator = this.respond(ctx, markup, data);
          callback(null, generator);
        }.bind(this));
      }.bind(this));
      Backbone.history.loadUrl(ctx.req.url);
    }.bind(controller);
  },

  getMapRouteFromRoute: function (route) {
    return apiMap[route];
  },

  bootstrap: function (route, callback) {
    var mapRoute = this.getMapRouteFromRoute(route);
    if (mapRoute) {
      mapRoute().fetch(function (err, data) {
        var name = mapRoute().name,
        obj = {};
        Bootstrap[name] = data;
        obj[name] = data;
        callback(obj);
      }.bind(this));
    } else {
      callback(null);
    }
  },

  respond: function (ctx, markup, data) {
    console.log('im rendering');
    return ctx.render('index', {
      initialMarkup: markup,
      data: data
    });
  }
};
