[![Build Status](https://travis-ci.org/graphology/graphology-canvas.svg)](https://travis-ci.org/graphology/graphology-canvas)

# Graphology Canvas

Canvas rendering routines for [`graphology`](https://graphology.github.io).

## Installation

```
npm install graphology-canvas
```

Note that `graphology-canvas` relies on [`node-canvas`](https://www.npmjs.com/package/canvas). As such, if you experience issues when installing the libray check that you have the required dependencies as listed [here](https://www.npmjs.com/package/canvas#compiling).

## Usage

```js
var render = require('graphology-canvas');

render(graph, './graph.png', () => console.log('Done!'));
render(graph, './graph.png', settings, () => console.log('Done!'));
```
