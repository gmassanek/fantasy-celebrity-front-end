import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('team', params.id).then(function(data) {
      return data;
    }).fail(function(e) {
      console.log(e);
    });
  }
});
