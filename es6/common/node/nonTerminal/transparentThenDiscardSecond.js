'use strict';

const arrayUtil = require('../../../arrayUtil');

class TransparentThenDiscardSecondNode {
  static fromNodesAndProductionName(nodes, productionName) {
    nodes = arrayUtil.discardSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardSecondNode;
