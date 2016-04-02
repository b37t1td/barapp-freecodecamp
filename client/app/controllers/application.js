import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams : ['term', 'city'],
  user : {},
  places : Ember.A(),
  location : {},
  city : Ember.computed.alias('location.city'),
  term : 'Nightlife',
  home : Ember.inject.controller(),

  actions : {
    changeLocation(loc) {
      this.set('city', loc);
    }
  }
});
