import Ember from 'ember';

export default Ember.Controller.extend({
  application : Ember.inject.controller(),
  amgoing : Ember.inject.controller(),
  isLoading : false,
  total : 0,
  limit: 10,
  page : 0,
  term : Ember.computed.alias('application.term'),
  location : Ember.computed.alias('application.location.city'),
  places : Ember.computed.alias('application.places'),

  queryParams: ['page'],

   hasPreviousPage: function(){
     return this.get('page') > 0;
   }.property('page'),

   hasNextPage: function(){
     return (this.get('page') + this.get('limit')) < this.get('total');
   }.property('page', 'limit', 'total'),

   prevPage : function() {
     return this.get('page') - 1;
   }.property('page'),

   nextPage : function() {
     return this.get('page') + 1;
   }.property('page'),

  search() {
    this.set('isLoading', true);

    let location = encodeURIComponent(this.get('application.location.city'));
    let term = encodeURIComponent(this.get('application.term'));

    let uri = '/api/yelp/search/' + term + '/' + location;
    uri += '?limit=' + this.get('limit');
    uri += '&offset=' + this.get('page');

    $.get(uri).then((data) => {
      this.set('total', data.total);
      this.set('content', data.businesses);
      this.set('isLoading', false);
    });
  },

  updateur : function() {
     this.search();
  }.observes('application.term', 'application.location.city', 'page'),

  actions : {
    unfollow(item) {
      this.set('isLoading', true);
      let obj = this.get('application.places').findBy('id', item.id);

      this.get('amgoing').unfollow(obj)
        .then(() => {
           this.get('application.places').removeObject(obj);
            this.set('isLoading', false);
        });
    },

    amGoing(item) {
      this.set('isLoading', true);

      $.ajax({
        method : 'POST',
        type : 'application/json',
        url : '/api/user/going',
        data : item
      }).then(() => {
        $.get('/api/user/places').then((data) => {
          this.set('places', data);
          this.set('isLoading', false);
        });
      });

    }
  }

});
