/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require("broccoli-funnel");
var mergeTrees = require("broccoli-merge-trees");

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    lessOptions: {
       paths: [
         'bower_components/bootstrap/less'
       ]
     }
  });

  app.import('bower_components/font-awesome/css/font-awesome.min.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

  var faAssets = new Funnel("bower_components/font-awesome/fonts", {
    srcDir: "/",
    include: ["*.*"],
    destDir: "/fonts"
  });

  assets = mergeTrees([faAssets]);

  return app.toTree(assets);
};
