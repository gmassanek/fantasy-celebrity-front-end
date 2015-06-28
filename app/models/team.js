import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  rosterSlots: DS.hasMany('rosterSlot')
});
