import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  player: DS.belongsTo('player'),
  leaguePosition: DS.belongsTo('league-position')
});
