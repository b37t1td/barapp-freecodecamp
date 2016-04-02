import Ember from 'ember';

let fetchUserInfo = () => {
  return $.get('/api/user/me');
};

let fetchUserLocation = () => {
  return $.get('/api/ip');
};

let fetchPlaces = () => {
  return $.get('/api/user/places');
};


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      user : fetchUserInfo(),
      places : fetchPlaces(),
      location: fetchUserLocation()
    });
  },


  setupController(controller, model) {
    controller.set('user', model.user);
    controller.set('places', model.places);

    if (controller.get('city')) {

    } else {
      controller.set('location', model.location);
    }
  }

});
