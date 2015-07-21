import Ember from 'ember';

export default Ember.Component.extend({
  shouldDisplay: function() {
    return this.get('message') !== undefined && this.get('message') !== "";
  }.property('message', 'dismissed'),

  actions: {
    dismiss() {
      this.set('message', "");
    }
  }
});
