'use strict';

var arrayUtil = require('../../arrayUtil');

class TransparentThenKeepSecondNode {
  static fromNodes(nodes, productionName) {
    nodes = arrayUtil.keepSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepSecondNode;
