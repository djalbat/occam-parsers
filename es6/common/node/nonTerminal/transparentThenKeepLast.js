'use strict';

const arrayUtil = require('../../../arrayUtil');

class TransparentThenKeepLastNode {
  static fromNodesAndProductionName(nodes, productionName) {
    nodes = arrayUtil.keepLast(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepLastNode;
