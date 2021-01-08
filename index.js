/**
 * Graphology Canvas Endpoint
 * ===========================
 *
 * Publicly-exposed routine used to render the given graph into an arbitrary
 * canvas context.
 */
var isGraph = require('graphology-utils/is-graph');
var renderer = require('./renderer.js');
var refineSettings = require('./defaults.js').refineSettings;

exports.render = function render(graph, context, settings) {
  if (!isGraph(graph))
    throw new Error('graphology-canvas/render: expecting a valid graphology instance.');

  settings = refineSettings(settings);

  renderer(graph, context, settings);
};
