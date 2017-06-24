'use strict';

const arrayUtil = require('../../../util/array');

class TransparentThenDiscardFirstNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtil.discardFirst(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardFirstNode;
