import DS from 'ember-data';

var ApplicationAdapter = DS.ActiveModelAdapter.extend({
  host: EmberENV.apiRoot,
  namespace: 'api/v1'
});

export default ApplicationAdapter;
