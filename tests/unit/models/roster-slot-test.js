import { moduleForModel, test } from 'ember-qunit';

moduleForModel('roster-slot', 'Unit | Model | roster slot', {
  // Specify the other units that are required for this test.
  needs: ['model:player', 'model:league-position']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
