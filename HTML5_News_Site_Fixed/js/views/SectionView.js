define([
  'jquery',
  'underscore',
  'backbone',
  'collections/SectionArticleCollection',
  'text!templates/sectionTemplate.html'
], function($, _, Backbone, SectionArticleCollection, sectionTemplate){
 
  var SectionView = Backbone.View.extend({
    el: 'section',
    class: 'main-section',
    
    initialize: function(topic) {
      var that = this;
      var onDataHandler = function(collection) {
          that.render();
      }
      that.collection = new SectionArticleCollection(topic); 
      that.collection.fetch({ success : onDataHandler, dataType: 'json'});
    },
   
    render: function() {
      var data = {
        topic: this.topic,
        main: this.collection.pluck('main')[0],
        aside: this.collection.pluck('aside')[0]
      };
      
      // Remove the banner ad for section views
      $('.banner-ad').remove();
      var compiledTemplate = _.template(sectionTemplate, data);
      this.$el.html(compiledTemplate);
    } 
 });
  
  return SectionView;
});
