/**
 * Graphology Canvas Renderer
 * ===========================
 *
 * Function taking a canvas context and rendering the given graph.
 */
var isGraph = require('graphology-utils/is-graph');
var helpers = require('./helpers.js');
var fillBackground = require('./components/background.js');
var drawNode = require('./components/nodes/circle.js');

function renderer(graph, context, settings) {
  if (!isGraph(graph))
    throw new Error('graphology-canvas/renderer: expecting a valid graphology instance.');

  // Reducing nodes
  var nodeData = helpers.reduceNodes(graph, settings);

  // Filling background
  fillBackground(context, 'white', settings.width, settings.height);

  // Drawing nodes
  var k;

  for (k in nodeData)
    drawNode(context, nodeData[k]);
}

module.exports = renderer;
