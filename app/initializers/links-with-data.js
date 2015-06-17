import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.LinkComponent.reopen({
    attributeBindings: ['data-toggle', 'data-hover']
  });
}

export default {
  name: 'links-with-data',
  initialize: initialize
};
