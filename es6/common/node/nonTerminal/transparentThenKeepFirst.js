'use strict';

const arrayUtil = require('../../../util/array');

class TransparentThenKeepFirstNode {
  static fromNodesAndProductionName(nodes, productionName) {
    nodes = arrayUtil.keepFirst(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepFirstNode;
