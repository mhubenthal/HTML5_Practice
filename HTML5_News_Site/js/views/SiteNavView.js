define([
  'jquery',
  'underscore',
  'backbone',
  'collections/CategoryCollection',
  'text!templates/siteNavTemplate.html'
], function($, _, Backbone, CategoryCollection, siteNavTemplate){
 
  var SiteNavView = Backbone.View.extend({
    el: 'h1',
    class: 'main-title',
   
    render: function(){
      var compiledTemplate = _.template(siteNavTemplate);
      this.$el.before(compiledTemplate); 
    }
  });
  
  return SiteNavView;
});
