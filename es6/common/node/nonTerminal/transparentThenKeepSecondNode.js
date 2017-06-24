'use strict';

const arrayUtil = require('../../../util/array');

class TransparentThenKeepSecondNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtil.keepSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepSecondNode;
