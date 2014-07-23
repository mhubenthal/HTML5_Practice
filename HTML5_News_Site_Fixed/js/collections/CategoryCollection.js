define([
  'jquery',
  'underscore',
  'backbone',
  'models/ArticleModel'
], function($, _, Backbone, ArticleModel){
  
  var CategoryCollection = Backbone.Collection.extend({
    model: ArticleModel,
    url: 'http://html5news.herokuapp.com/articles/categories'
});
 
  return CategoryCollection;
});
