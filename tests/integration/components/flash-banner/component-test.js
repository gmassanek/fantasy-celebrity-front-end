import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('flash-banner', 'Integration | Component | flash banner', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{flash-banner level="danger" message="Foobar"}}`);

  assert.notEqual(this.$('.alert').text().indexOf("Foobar"), -1);
});
