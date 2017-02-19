'use strict';

var arrayUtil = require('../../../arrayUtil');

class TransparentThenKeepFirstNode {
  static fromNodesAndProductionName(nodes, productionName) {
    nodes = arrayUtil.keepFirst(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepFirstNode;
