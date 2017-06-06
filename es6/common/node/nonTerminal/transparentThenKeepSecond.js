'use strict';

const arrayUtil = require('../../../util/array');

class TransparentThenKeepSecondNode {
  static fromNodesAndProductionName(nodes, productionName) {
    nodes = arrayUtil.keepSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepSecondNode;
