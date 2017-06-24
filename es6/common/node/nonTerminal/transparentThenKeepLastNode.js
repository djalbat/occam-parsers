'use strict';

const arrayUtil = require('../../../util/array');

class TransparentThenKeepLastNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtil.keepLast(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepLastNode;
