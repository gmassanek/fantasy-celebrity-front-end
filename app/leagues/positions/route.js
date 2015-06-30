import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model() {
    var leaguesModel = this.modelFor('leagues');

    var uri = `${EmberENV.apiRoot}/api/v1/leagues/${leaguesModel.league_id}/positions`;
    return ajax(uri).then(function(data) {
      return data;
    }).fail(function() {
      console.log("Error fetching league positions");
    });
  }
});
