import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      positions: [ {
        name: "Actors",
        slots: 2
      }, {
        name: "Athletes",
        slots: 1
      }, {
        name: "Politicians",
        slots: 1
      }, {
        name: "Miscellaneous",
        slots: 2
      }, {
        name: "Reality Starts",
        slots: 1
      }, {
        name: "Musicians",
        slots: 1
      }, {
        name: "Dead People",
        slots: 1
      } ]
    };
  }
});
