'use strict';

const arrayUtil = require('../../../arrayUtil');

class TransparentThenDiscardFirstNode {
  static fromNodesAndProductionName(nodes, productionName) {
    nodes = arrayUtil.discardFirst(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardFirstNode;
