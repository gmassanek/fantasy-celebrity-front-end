import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('leagues', function() {
    this.route('show', { path: ":id" });
    this.route('players', {path: ":id/players"});
  });
});

export default Router;
