'use strict';

var arrayUtil = require('../arrayUtil');

class TransparentThenSecondNode {
  static fromNodes(nodes, productionName) {
    nodes = arrayUtil.keepSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenSecondNode;
