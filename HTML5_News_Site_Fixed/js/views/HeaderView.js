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
    el: 'header',
    class: 'main-header',
    
    render: function(){
      // Get current date
      var todaysDate = new DateModel();
      var data = {today: todaysDate.get('today')};
      
      // Add header to page
      var compiledTemplate = _.template(headerTemplate, data);
      this.$el.html(compiledTemplate);

      // Render navigation components of header (sub-views)
      // Sub-views will automatically call their render method
      // once data has loaded.
      //var siteNavView = new SiteNavView();
      var sectionNavView = new SectionNavView();
    }
  });
  return HeaderView;
});
