import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('team', { league_id: 1 }).then(function(data) {
      return data;
    }).fail(function(e) {
      console.log(e);
    });
  }
});
