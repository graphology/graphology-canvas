/**
 * Graphology Canvas Renderer
 * ===========================
 *
 * Function taking a canvas context and rendering the given graph.
 */
var isGraph = require('graphology-utils/is-graph');
var helpers = require('./helpers.js');
var defaults = require('./defaults.js');
var fillBackground = require('./components/background.js');

var components = {
  nodes: {
    circle: require('./components/nodes/circle.js')
  },
  edges: {
    line: require('./components/edges/line.js')
  }
};

function renderer(graph, context, settings) {
  if (!isGraph(graph))
    throw new Error('graphology-canvas/renderer: expecting a valid graphology instance.');

  // Reducing nodes
  var nodeData = helpers.reduceNodes(graph, settings);

  // Filling background
  fillBackground(context, 'white', settings.width, settings.height);

  // Drawing edges
  var sourceData, targetData;
  graph.forEachEdge(function(edge, attr, source, target) {

    // Reducing edge
    if (typeof settings.edges.reducer === 'function')
      attr = settings.edges.reducer(settings, edge, attr);

    attr = defaults.DEFAULT_EDGE_REDUCER(settings, edge, attr);

    sourceData = nodeData[source];
    targetData = nodeData[target];

    components.edges[attr.type](settings, context, attr, sourceData, targetData);
  });

  // Drawing nodes
  // TODO: should we draw in size order to avoid weird overlaps? Should we run noverlap?
  var k, d;

  for (k in nodeData) {
    d = nodeData[k];
    components.nodes[d.type](settings, context, d);
  }
}

module.exports = renderer;
