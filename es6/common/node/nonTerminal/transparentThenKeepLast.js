'use strict';

const arrayUtil = require('../../../util/array');

class TransparentThenKeepLastNode {
  static fromNodesAndProductionName(nodes, productionName) {
    nodes = arrayUtil.keepLast(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepLastNode;
