define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var DateModel = Backbone.Model.extend({
    initialize: function(){
      // Format today's date
      var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
      var months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
      var currentTime = new Date();
      var month = currentTime.getMonth();
      var day = currentTime.getDay();
      var dayOfMonth = currentTime.getDate();
      var year = currentTime.getFullYear();
      var todaysDate = days[day] + ", " + months[month] + " " + dayOfMonth + ", " + year;
      this.set({today: todaysDate});
    }
  });

  return DateModel;
});
