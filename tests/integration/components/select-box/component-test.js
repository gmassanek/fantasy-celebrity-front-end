import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('select-box', 'Integration | Component | select box', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('myOptions', [{id: 1, title: "Foo"}, {id: 2, title: "Bar"}]);
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{select-box options=myOptions selectedValue=1 }}`);

  assert.equal(this.$('select option').length, 2);
});
