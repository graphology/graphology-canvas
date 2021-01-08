[![Build Status](https://travis-ci.org/graphology/graphology-canvas.svg)](https://travis-ci.org/graphology/graphology-canvas)

# Graphology Canvas

Canvas rendering routines for [`graphology`](https://graphology.github.io).

## Installation

```
npm install graphology-canvas
```

If you need to use this package's functions in node, you will also need to install [`node-canvas`](https://www.npmjs.com/package/canvas) thusly:

```
npm install canvas
```

If you experience any issue when installing the libray check that you have the required dependencies as listed [here](https://www.npmjs.com/package/canvas#compiling).

## Usage

### Rendering a graph in an arbitrary canvas context

```js
import {render} from 'graphology-canvas';

render(graph, context, settings);
```

### Rendering a graph to PNG in node

```js
import {renderToPNG} from 'graphology-canvas/node';

renderToPNG(graph, './graph.png', () => console.log('Done!'));
renderToPNG(graph, './graph.png', settings, () => console.log('Done!'));
```

### Settings

* **width** *?number* [`2048`]: width of the canvas. Will be the same as `height` if not provided.
* **height** *?number* [`2048`]: height of the canvas. Will be the same as `width` if not provided.
* **margin** *?number* [`20`]: margin to keep around the drawing.
* **nodes** *?object*: node-related settings:
  * **defaultColor** *?string* [`#999`]: default color for nodes.
  * **reducer** *?function*: reducer fonction for nodes taking the rendering settings, the node key and its attributes and tasked to return rendering info such as `color`, `size` etc.
* **edges** *?object*: node-related settings:
  * **defaultColor** *?string* [`#999`]: default color for edges.
  * **reducer** *?function*: reducer fonction for edges taking the rendering settings, the node key and its attributes and tasked to return rendering info such as `color`, `size` etc.
