'use strict';

const arrayUtil = require('../../../util/array');

class TransparentThenDiscardLastNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtil.discardLast(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardLastNode;
