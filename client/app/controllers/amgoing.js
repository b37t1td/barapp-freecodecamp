import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  places : Ember.computed.alias('application.places'),
  isLoading: false,

  unfollow: function(item) {
    this.set('isLoading', true);

  return  $.ajax({
      method : 'DELETE',
      url : '/api/user/places/' + item['_id']
    }).then((data) => {
      this.get('places').removeObject(item);
      this.set('isLoading', false);
    });
  },

  actions : {
    unfollow: function(item) {
      this.unfollow(item);
    }
  }
});
