'use strict';

const arrayUtil = require('../../../util/array');

class TransparentThenDiscardSecondNode {
  static fromNodesAndProductionName(nodes, productionName) {
    nodes = arrayUtil.discardSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardSecondNode;
