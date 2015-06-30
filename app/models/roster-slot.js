import DS from 'ember-data';

export default DS.Model.extend({
  leaguePlayer: DS.belongsTo('league-player'),
  leaguePosition: DS.belongsTo('league-position')
});
