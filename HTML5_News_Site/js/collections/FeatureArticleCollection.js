define([
  'jquery',
  'underscore',
  'backbone',
  'models/ArticleModel'
], function($, _, Backbone, ArticleModel){
  
  var FeatureArticleCollection = Backbone.Collection.extend({
    model: ArticleModel,
    url: 'http://html5news.herokuapp.com/articles/featured'
});
 
  return FeatureArticleCollection;
});
