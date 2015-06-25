import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('data-table', 'Unit | Component | data table', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject({

  });
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render({ layout: Ember.Handlebars.compile("barhandle") });
  assert.equal(component._state, 'inDOM');
});
