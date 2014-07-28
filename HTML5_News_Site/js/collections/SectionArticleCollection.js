define([
  'jquery',
  'underscore',
  'backbone',
  'models/ArticleModel'
], function($, _, Backbone, ArticleModel){
  
  var SectionArticleCollection = Backbone.Collection.extend({
    model: ArticleModel,
    initialize: function(topic){
      this.topic = topic;
    },
    url: function(){
      var sections = {
        'world': 1, 'business': 2, 'sports': 3, 'fashion': 4, 'video': 5, 'opinion': 6, 'travel': 7
      };
      return 'http://html5news.herokuapp.com/category/'+sections[this.topic];
    }
});
 
  return SectionArticleCollection;
});
