define([
  'jquery',
  'underscore',
  'backbone',
  'collections/CategoryCollection',
  'text!templates/siteNavTemplate.html'
], function($, _, Backbone, CategoryCollection, siteNavTemplate){
 
  var SiteNavView = Backbone.View.extend({
    el: 'nav',
    class: 'site-nav',
    
    initialize:function() {
      var that = this;
      var onDataHandler = function(collection) {
          that.render();
      }
      that.collection = new CategoryCollection(); 
      that.collection.fetch({ success : onDataHandler, dataType: 'json' });
    },
   
    render: function(){
      // Get array of section displayName(s) attribute
      var sectionArray = this.collection.pluck('displayName');
      var data = {sections: sectionArray};

      //var compiledTemplate = _.template(siteNavTemplate, data);
      //this.$el.html(compiledTemplate); 
    }
  });
  
  return SiteNavView;
});
