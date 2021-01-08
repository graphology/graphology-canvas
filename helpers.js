/**
 * Graphology Canvas Helpers
 * ==========================
 *
 * Micellaneous helper functions used throughout the library.
 */
var defaults = require('./defaults.js');

// Taken from @jacomyma (graph-recipes)
function reduceNodes(graph, settings) {
  var containerWidth = settings.width,
      containerHeight = settings.height;

  var xMin = Infinity,
      xMax = -Infinity,
      yMin = Infinity,
      yMax = -Infinity;

  var data = {};

  graph.forEachNode(function(node, attr) {

    // Applying user's reducing logic
    if (typeof settings.nodes.reducer === 'function')
      attr = settings.nodes.reducer(settings, node, attr);

    attr = defaults.DEFAULT_NODE_REDUCER(settings, node, attr);
    data[node] = attr;

    // Finding bounds
    if (attr.x < xMin)
      xMin = attr.x;
    if (attr.x > xMax)
      xMax = attr.x;
    if (attr.y < yMin)
      yMin = attr.y;
    if (attr.y > yMax)
      yMax = attr.y;
  });

  var graphWidth = xMax - xMin,
      graphHeight = yMax - yMin;

  var k, n;

  for (k in data) {
    n = data[k];

    n.x = containerWidth * ((n.x - xMin) / graphWidth);
    n.y = containerHeight * (1 - (n.y - yMin) / graphHeight);
  }

  return data;
}

exports.reduceNodes = reduceNodes;
