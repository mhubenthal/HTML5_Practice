define([
  'jquery',
  'underscore',
  'backbone',
  'models/article/ArticleModel'
], function($, _, Backbone, ArticleModel){
  
  var ArticlesCollection = Backbone.Collection.extend({
    model: ArticleModel,
    url: 'http://html5news.herokuapp.com/articles/all'
});
 
  return ArticlesCollection;
});
