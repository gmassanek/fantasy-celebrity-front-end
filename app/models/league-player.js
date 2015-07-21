import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr(),
  last_name: DS.attr(),
  allowed_league_position_ids: DS.attr(),

  allowedLeaguePositions: function() {
    var _this = this;
    return this.get('allowed_league_position_ids').map(function(id) {
      return _this.store.find('league-position', id);
    });
  }.property('allowed_league_position_ids')

});
