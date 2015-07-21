import DS from 'ember-data';

export default DS.Model.extend({
  league_position_id: DS.attr('number'),
  league_player_id: DS.attr('number'),

  leaguePlayer: DS.belongsTo('league-player'),
  leaguePosition: DS.belongsTo('league-position')
});
