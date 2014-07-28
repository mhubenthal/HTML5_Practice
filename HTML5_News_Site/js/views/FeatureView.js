define([
  'jquery',
  'underscore',
  'backbone',
  'collections/FeatureArticleCollection',
  'text!templates/featureTemplate.html'
], function($, _, Backbone, FeatureArticleCollection, featureTemplate){
 
  var FeatureView = Backbone.View.extend({
    el: 'section',
    class: 'main-section',
    
    initialize:function() {
      var that = this;
      var onDataHandler = function(collection) {
          that.render();
      }
      that.collection = new FeatureArticleCollection(); 
      that.collection.fetch({success : onDataHandler, dataType: 'json'});
    },
   
    render: function(){
      var data = {
        aside: this.collection.pluck('aside')[0],
        main: this.collection.pluck('main')[0],
        opinion: this.collection.pluck('opinion')[0],
        travel: this.collection.pluck('travel')[0]
      };

      var compiledTemplate = _.template(featureTemplate, data);
      this.$el.html(compiledTemplate); 
    }
  });
  
  return FeatureView;
});
