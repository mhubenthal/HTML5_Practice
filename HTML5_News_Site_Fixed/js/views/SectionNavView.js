define([
  'jquery',
  'underscore',
  'backbone',
  'collections/CategoryCollection',
  'text!templates/sectionNavTemplate.html'
], function($, _, Backbone, CategoryCollection, sectionNavTemplate){
 
  var SectionNavView = Backbone.View.extend({
    el: 'nav',
    class: 'section-nav',
    
    initialize:function() {
      var that = this;
      var onDataHandler = function(collection) {
          that.render();
      }
      that.collection = new CategoryCollection(); 
      that.collection.fetch({success : onDataHandler, dataType: 'json'});
    },
   
    render: function(){
      // Get array of section displayName(s) attribute
      var sectionArray = this.collection.pluck('displayName');
      var linkArray = this.collection.pluck('shortName');
      var data = {
        sections: sectionArray,
        links: linkArray
      };

      var compiledTemplate = _.template(sectionNavTemplate, data);
      this.$el.html(compiledTemplate); 
    }
  });
  
  return SectionNavView;
});
