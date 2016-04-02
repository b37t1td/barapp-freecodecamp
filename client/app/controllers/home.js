import Ember from 'ember';

export default Ember.Controller.extend({
  application : Ember.inject.controller(),
  isLoading : false,
  total : 0,
  limit: 10,
  page : 0,
  term : Ember.computed.alias('application.term'),
  location : Ember.computed.alias('application.location.city'),

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

  init() {
    this.search();
  },

  actions : {
    amGoing(item) {
      this.set('isLoading', true);

      $.post('/api/user/going').then(() => {
        this.set('isLoading', false);
      });

    }
  }

});
