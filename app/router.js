import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('leagues', { path: "leagues/:league_id" }, function() {
    this.route('players');
    this.route('show', { path: "/" });
    this.route('settings');
    this.route('standings');
    this.route('teams', function() {
      this.route('index', {path: "/"});
      this.route('show', {path: "/:id"});
    });
    this.route('positions');
    this.route('scoring');
    this.route('points', function() {
      this.route('index', {path: "/"});
      this.route('new');
    });
  });
});

export default Router;
