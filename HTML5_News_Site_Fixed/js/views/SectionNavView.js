define([
  'jquery',
  'underscore',
  'backbone',
  'views/SiteNavView',
  'views/SectionNavView',
  'text!templates/headerTemplate.html'
], function($, _, Backbone, CategoryCollection, headerTemplate){
 
  var ArticlesView = Backbone.View.extend({
    el: $("#page"),
    //template: _.template($('#article_list_template').html()),

    initialize:function() {
      var that = this;
      var onDataHandler = function(collection) {
        that.render();
      }
      that.collection = new CategoryCollection([]); 
      that.collection.fetch({success: onDataHandler, dataType:"json"});
    },
   
    render: function() {
      // Get a list of all 
      _.each(this.collection.models, function(category){
        var displayName = category.attributes['displayName'];

        var data = {'id': lArticleId, 'headline': lArticleHeadline, 'snippet': lArticleSnippet};

        var compiledTemplate = _.template(articlesTemplate, data);
        console.log(typeof(compiledTemplate));
        this.$el.append( compiledTemplate ); 
      }, this);
      
      return this;
    }
   
  });
  return ArticlesView;
});
