import Ember from 'ember';

export default Ember.Component.extend({
  options: null,
  selectedValue: null,
  changeAction: null,

  didInitAttrs() {
    this._super(...arguments);
    var options = this.get('options');

    if (!options) {
      this.set('options', []);
    }
  },

  actions: {
    changed() {
      var selectedEl = this.$('select')[0];
      var selectedIndex = selectedEl.selectedIndex;
      var selectedValue = selectedEl.options[selectedIndex].value;

      this.set('selectedValue', selectedValue);
      this.changeAction(selectedValue);
    }
  }

});
