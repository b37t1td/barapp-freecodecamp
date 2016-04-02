import Ember from 'ember';

export default Ember.Component.extend({
  tagName : '',
  user : Ember.computed.alias('application.user'),
  aaa : 'sssss'

});
