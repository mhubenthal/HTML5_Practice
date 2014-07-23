// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/HeaderView',
  'views/AdView',
  'views/HomeView',
  'views/SectionView'
], function($, _, Backbone, HeaderView, AdView, HomeView, SectionView){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '/home': 'showHomepage',
      
      // Route to user selected section, based on available sections
      '/section/:topic': 'showTopic',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){
    // Create new Router object
    var app_router = new AppRouter;
    
    /*
    // Render header always
    var headerView = new HeaderView();
    headerView.render();
    */
    
    // Render homepage
    app_router.on('route:showHomepage', function(){ 
      //var adView = new AdView();
      //var homeView = new HomeView();
      //adView.render();
      //homeView.render();
    });
    
    // Render user selected section
    app_router.on('route:showTopic', function(topic){
        // Call render on the module we loaded in via the dependency array
        //var sectionView = new SectionView({section: topic});
        //sectionView.render();
    });

    // Show homepage, no matching route
    app_router.on('route:defaultAction', function(actions){
      var headerView = new HeaderView();
    headerView.render();
      // We have no matching route, lets display the home page 
      //var adView = new AdView();
      //var homeView = new HomeView();
      //adView.render();
      //homeView.render();
    });

    // Start monitoring Router hashchange events and start dispatching routes
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
