import Ember from 'ember';

export default Ember.Component.extend({
  tagName : '',
  item : null,
  isFollowing : false,
  isLoggedIn : false,

  init() {
    this.set('isLoggedIn', !!this.get('application.user.login'));
    if (this.get('application.places.length') > 0) {
      this.set('isFollowing', !!this.get('application.places').findBy('id', this.get('item.id')));
    }
  }

});
