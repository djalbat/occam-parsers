'use strict';

const arrayUtil = require('../../../arrayUtil');

class TransparentThenDiscardLastNode {
  static fromNodesAndProductionName(nodes, productionName) {
    nodes = arrayUtil.discardLast(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardLastNode;
