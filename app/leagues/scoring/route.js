import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model() {
    var uri = `${EmberENV.apiRoot}/api/v1/status`;
    return ajax(uri);
  }
});
