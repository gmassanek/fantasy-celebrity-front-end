/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    enabled: false
  }
});

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

// Bootstrap
app.import("bower_components/flot/jquery.flot.js");
app.import("bower_components/flot/jquery.flot.pie.js");
app.import("bower_components/flot/jquery.flot.resize.js");
app.import("bower_components/flot/jquery.flot.time.js");
app.import("bower_components/flot/jquery.flot.stack.js");
app.import("bower_components/flot/jquery.flot.categories.js");
app.import("bower_components/flot.tooltip/js/jquery.flot.tooltip.js");

// Bootstrap
app.import("bower_components/bootstrap/dist/css/bootstrap.min.css");
app.import("bower_components/bootstrap/dist/js/bootstrap.min.js");

// Datatables
app.import("bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css");
app.import("bower_components/datatables/media/js/jquery.dataTables.min.js");
app.import("bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.js");

app.import("bower_components/datatables/media/images/sort_asc.png", { destDir: 'images' });
app.import("bower_components/datatables/media/images/sort_asc_disabled.png", { destDir: 'images' });
app.import("bower_components/datatables/media/images/sort_both.png", { destDir: 'images' });
app.import("bower_components/datatables/media/images/sort_desc.png", { destDir: 'images' });
app.import("bower_components/datatables/media/images/sort_desc_disabled.png", { destDir: 'images' });

app.import("bower_components/ember/ember-template-compiler.js", { destDir: 'images' });

// MVP Ready
app.import("vendor/mvpready-admin.css");
app.import("vendor/mvpready-core.js");
app.import("vendor/mvpready-helpers.js");
app.import("vendor/mvpready-admin.js");

module.exports = app.toTree();
