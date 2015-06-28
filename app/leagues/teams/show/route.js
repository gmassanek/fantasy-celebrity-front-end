import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model(params) {
    var uri = `${EmberENV.apiRoot}/api/v1/teams/${params.id}`;
    return ajax(uri).then(function(data) {
      return data;
    }).fail(function() {
      console.log("Error fetching team");
    });
  }
});
