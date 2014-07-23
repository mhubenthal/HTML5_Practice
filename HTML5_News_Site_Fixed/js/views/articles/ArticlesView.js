define([
  'jquery',
  'underscore',
  'backbone',
  'collections/articles/ArticlesCollection',
  'text!templates/articles/articlesTemplate.html'
], function($, _, Backbone, ArticlesCollection, articlesTemplate){
 
  var ArticlesView = Backbone.View.extend({
   el: $("#page"),
  //template: _.template($('#article_list_template').html()),
    
    initialize:function() {
      var that = this;
      var onDataHandler = function(collection) {
          that.render();
      }
      that.collection = new ArticlesCollection([]); 
      that.collection.fetch({ success : onDataHandler, dataType: "json" });

    },
   
  render: function() {
    
    _.each(this.collection.models, function(article){
      var lArticleId = article.attributes['id'];
      var lArticleHeadline = article.attributes['headLine'];
      //console.log(article.attributes['headLine']);
      var lArticleSnippet = article.attributes['snippet'];
      
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
