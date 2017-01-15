'use strict';

var arrayUtil = require('../arrayUtil');

class TransparentThenDiscardFirstNode {
  static fromNodes(nodes, productionName) {
    nodes = arrayUtil.discardFirst(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardFirstNode;
