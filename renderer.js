/**
 * Graphology Canvas Renderer
 * ===========================
 *
 * Function taking a canvas context and rendering the given graph.
 */
var isGraph = require('graphology-utils/is-graph');


function renderer(graph, context, settings) {
  if (!isGraph(graph))
    throw new Error('graphology-canvas/renderer: expecting a valid graphology instance.');

  context.fillStyle = "rgb(200,0,0)"; // définit la couleur de remplissage du rectangle
  context.fillRect(10, 10, 55, 50);   // dessine le rectangle à la position 10, 10 d'une largeur de 55 et d'une hauteur de 50
}

module.exports = renderer;
