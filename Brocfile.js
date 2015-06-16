/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import("bower_components/fontawesome/css/font-awesome.min.css");
app.import("bower_components/fontawesome/fonts/FontAwesome.otf", { destDir: 'fonts' });
app.import("bower_components/fontawesome/fonts/fontawesome-webfont.eot", { destDir: 'fonts' });
app.import("bower_components/fontawesome/fonts/fontawesome-webfont.svg", { destDir: 'fonts' });
app.import("bower_components/fontawesome/fonts/fontawesome-webfont.ttf", { destDir: 'fonts' });
app.import("bower_components/fontawesome/fonts/fontawesome-webfont.woff", { destDir: 'fonts' });
app.import("bower_components/fontawesome/fonts/fontawesome-webfont.woff2", { destDir: 'fonts' });
app.import("bower_components/slimscroll/jquery.slimscroll.min.js");
app.import("bower_components/flot/excanvas.min.js");
app.import("bower_components/flot/jquery.flot.js");
app.import("bower_components/flot/jquery.flot.pie.js");
app.import("bower_components/flot/jquery.flot.resize.js");
app.import("bower_components/flot/jquery.flot.time.js");
app.import("bower_components/flot.tooltip/js/jquery.flot.tooltip.js");

app.import("bower_components/bootstrap/dist/css/bootstrap.min.css");
app.import("bower_components/bootstrap/dist/js/bootstrap.min.js");

app.import("vendor/mvpready-admin.css");
app.import("vendor/mvpready-core.js");
app.import("vendor/mvpready-helpers.js");
app.import("vendor/mvpready-admin.js");

module.exports = app.toTree();
