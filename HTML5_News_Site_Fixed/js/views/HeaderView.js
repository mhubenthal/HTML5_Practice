define([
  'jquery',
  'underscore',
  'backbone',
  'views/SiteNavView',
  'views/SectionNavView',
  'text!templates/headerTemplate.html'
], function($, _, Backbone, CategoryCollection, headerTemplate){
 
  var HeaderView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');

      // Add header to page
      console.log("BEFORE");
      console.log(headerTemplate);
      var compiledTemplate = _.template(headerTemplate);
      console.log(compiledTemplate);
      this.$el.append(compiledTemplate);

      // Render navigation components of header (sub-views)
      var siteNavView = new SiteNavView();
      var sectionNavView = new SectionNavView();
      siteNavView.render();
      sectionNavView.render();
    }
  });
  return HeaderView;
});
