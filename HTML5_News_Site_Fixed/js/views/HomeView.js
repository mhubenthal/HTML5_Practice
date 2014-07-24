define([
  'jquery',
  'underscore',
  'backbone',
  'views/AdView',
  'views/FeatureView'
], function($, _, Backbone, AdView, FeatureView){

  var HomeView = Backbone.View.extend({
    el: 'section',
    class: 'main-section',

    render: function(){
      //$('.menu li').removeClass('active');
      //$('.menu li a[href="#"]').parent().addClass('active');
      //this.$el.append(homeTemplate);
      
      // Render sub-views
      // Sub-views will automatically call their render method
      // once data has loaded.
      var adView = new AdView();
      var featureView = new FeatureView();
    }
  });

  return HomeView;
});
