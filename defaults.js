var DEFAULTS = {
  margin: 20,
  width: 2048,
  height: 2048,
  nodes: {
    reducer: null,
    defaultColor: '#999'
  },
  edges: {
    defaultColor: '#ccc'
  }
};

exports.DEFAULTS = DEFAULTS;

exports.DEFAULT_NODE_REDUCER = function(settings, node, attr) {
  var reduced = {
    label: attr.label || node,
    x: attr.x,
    y: attr.y,
    size: attr.size || 1,
    color: attr.color || settings.nodes.defaultColor
  };

  if (typeof reduced.x !== 'number' || typeof reduced.y !== 'number')
    throw new Error('graphology-canvas: the "' + node + '" node has no valid x or y position. Expecting a number.');

  return reduced;
};
