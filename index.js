/**
 * Graphology Canvas Endpoint
 * ===========================
 *
 * Node.js API relying on `node-canvas` and Cairo.
 */
var fs = require('fs');
var canvasApi = require('canvas');
var defaultsDeep = require('lodash/defaultsDeep');
var renderer = require('./renderer.js');

var DEFAULTS = require('./defaults.js');

module.exports = function render(graph, outputPath, settings, callback) {
  if (arguments.length === 3) {
    callback = settings;
    settings = {};
  }

  settings = defaultsDeep({}, DEFAULTS, settings);

  var canvas = canvasApi.createCanvas(settings.width, settings.height);
  var context = canvas.getContext('2d');

  renderer(graph, context, settings);

  var out = fs.createWriteStream(outputPath);
  var pngStream = canvas.createPNGStream();

  pngStream.pipe(out);

  out.once('finish', function() {
    callback();
  });
};
