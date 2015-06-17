export function initialize(/* container, application */) {
  Ember.View.reopen({
    init: function() {
      this._super();
      var self = this;

      // bind attributes beginning with 'data-'
      Em.keys(this).forEach(function(key) {
        if (key.substr(0, 5) === 'data-') {
          self.get('attributeBindings').pushObject(key);
        }
      });
    }
  });

}

export default {
  name: 'links-with-data',
  initialize: initialize
};
