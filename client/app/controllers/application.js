import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams : ['term', 'city'],
  user : {},
  location : {},
  city : Ember.computed.alias('location.city'),
  term : 'Nightlife',



  actions : {
    changeLocation(loc) {
      this.set('city', loc);
    }
  }
});
