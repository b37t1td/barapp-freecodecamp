import Ember from 'ember';

let fetchUserInfo = () => {
  return $.get('/api/user/me');
};

let fetchUserLocation = () => {
  return $.get('/api/ip');
};


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      user : fetchUserInfo(),
      location: fetchUserLocation()
    });
  },


  setupController(controller,model) {
    controller.set('user', model.user);
    if (controller.get('city')) {

    } else {
      controller.set('location', model.location);
    }
  }

});
