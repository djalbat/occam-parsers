'use strict';

var arrayUtil = require('../../../arrayUtil');

class TransparentThenKeepSecondNode {
  static fromNodesAndProductionName(nodes, productionName) {
    nodes = arrayUtil.keepSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepSecondNode;
