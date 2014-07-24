define([
  'jquery',
  'underscore',
  'backbone',
  'collections/AdCollection',
  'text!templates/adTemplate.html'
], function($, _, Backbone, AdCollection, adTemplate){
 
  var AdView = Backbone.View.extend({
    el: 'header',
    class: 'main-header',
    
    initialize:function() {
      var that = this;
      var onDataHandler = function(collection) {
          that.render();
      }
      that.collection = new AdCollection(); 
      that.collection.fetch({ success : onDataHandler, dataType: 'json'});
    },
   
    render: function(){
      // Get array of section displayName(s) attribute
      var messageArray = this.collection.pluck('message');
      var data = {messages: messageArray};

      var compiledTemplate = _.template(adTemplate, data);
      this.$el.after(compiledTemplate); 
    }
  });
  
  return AdView;
});
