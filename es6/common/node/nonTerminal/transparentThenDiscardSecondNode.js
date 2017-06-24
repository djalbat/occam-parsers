'use strict';

const arrayUtil = require('../../../util/array');

class TransparentThenDiscardSecondNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtil.discardSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardSecondNode;
