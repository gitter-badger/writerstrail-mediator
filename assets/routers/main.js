var React = require('react'),
    Backbone = require('backbone'),
    AppComponent = require('../components/app.jsx'),
    HomeComponent = require('../components/home.jsx');

module.exports = Backbone.Router.extend({
  routes: {
    "/": "home",
    "": "home"
  },
  home: function ()  {
    return this.renderApp(HomeComponent);
  },
  renderApp: function (component, collections, models) {
    var appComponentFactory = React.createFactory(AppComponent),
      appComponent = appComponentFactory({
        component: component,
        collection: collections || {},
        model: models || {}
      });
    /*istanbul ignore else*/
    if (typeof window === 'undefined') {
      return React.renderToString(appComponent);
    }
    /*istanbul ignore next*/
    return React.render(appComponent, document.querySelector('main'));
  }
});
