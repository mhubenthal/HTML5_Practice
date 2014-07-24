// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/HeaderView',
  'views/HomeView',
  'views/SectionView'
], function($, _, Backbone, HeaderView, HomeView, SectionView){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Route to user selected section, based on available sections
      ':topic': 'showTopic',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){
    // Create new Router object
    var app_router = new AppRouter;

    // Render header always
    var headerView = new HeaderView();
    headerView.render();

    // Render user selected section
    app_router.on('route:showTopic', function(topic){
        // Call render on the module we loaded in via the dependency array
        var sectionView = new SectionView(topic);
    });

    // Show homepage, no matching route
    app_router.on('route:defaultAction', function(actions){
      // We have no matching route, lets display the home page 
      var homeView = new HomeView();
      homeView.render();
    });

    // Start monitoring Router hashchange events and start dispatching routes
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
