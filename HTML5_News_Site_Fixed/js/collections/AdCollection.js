define([
  'jquery',
  'underscore',
  'backbone',
  'models/AdModel'
], function($, _, Backbone, AdModel){
  
  var AdCollection = Backbone.Collection.extend({
    model: AdModel,
    url: 'http://html5news.herokuapp.com/banners'
});
 
  return AdCollection;
});
