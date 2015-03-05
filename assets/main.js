var Backbone = require('backbone'),
  $ = require('jquery'),
  MainRouter = require('./routers/main'),
  mainRouter = new MainRouter();

Backbone.$ = $;

Backbone.history.start({
  pushState: true
});

$(document).on('click', 'a[href]', function (event){
  event.preventDefault();
  var url = event.currentTarget.pathname.slice(1);
  mainRouter.navigate(url, true);
});
