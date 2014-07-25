define([
  'jquery',
  'underscore',
  'backbone',
  'models/DateModel',
  'views/SiteNavView',
  'views/SectionNavView',
  'text!templates/headerTemplate.html',
], function($, _, Backbone, DateModel, SiteNavView, SectionNavView, headerTemplate){
 
  var HeaderView = Backbone.View.extend({
    el: 'h1',
    id: 'header-placeholder',
    
    render: function(){
      // Get current date
      var todaysDate = new DateModel();
      var data = {today: todaysDate.get('today')};
      
      // Add header to page
      var compiledTemplate = _.template(headerTemplate, data);
      this.$el.replaceWith(compiledTemplate);

      // Render navigation components of header (sub-views)
      // sectionNavView will automatically call its render method
      // once data has loaded.
      var siteNavView = new SiteNavView();
      siteNavView.render();
      var sectionNavView = new SectionNavView();
    }
  });
  return HeaderView;
});
