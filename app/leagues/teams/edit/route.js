import Ember from 'ember';
import raw from 'ic-ajax';

export default Ember.Route.extend({
  model(params) {
    var _this = this;
    return this.store.find('team', params.id).then(function(data) {
      return {
        team: data,
        availablePositions: _this.store.all('league-position')
      };
    }).fail(function(e) {
      console.log(e);
    });
  },

  actions: {
    submit() {
      var data = { team: { roster_slots: [] }};
      this.currentModel.team.get('rosterSlots').map(function(slot) {
        var roster_slot_data = {
          league_position_id: slot.get('league_position_id'),
          league_player_id: slot.get('league_player_id')
        };
        data.team.roster_slots.push(roster_slot_data);
      });

      var _this = this;
      raw({
        url: `${EmberENV.apiRoot}/api/v1/teams/${this.currentModel.team.id}/roster_slots`,
        type: 'PUT',
        contentType: "application/json",
        data: JSON.stringify(data)
      }).then(function(response){
        _this.store.pushPayload('team', response);
        _this.transitionTo('leagues.teams.show', _this.currentModel.team.id);
      }, function(error){
        var errorMessage = error.jqXHR.responseJSON.error;
        Ember.set(_this.modelFor('leagues.teams.edit'), 'errorMessage', errorMessage);
      });
    },
    cancel() {
      this.transitionTo('leagues.teams.show', this.currentModel.team.id);
    }
  }
});
