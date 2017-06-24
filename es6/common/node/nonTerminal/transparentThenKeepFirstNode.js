'use strict';

const arrayUtil = require('../../../util/array');

class TransparentThenKeepFirstNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtil.keepFirst(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepFirstNode;
