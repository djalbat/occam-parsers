'use strict';

const arrayUtilities = require('../../../utilities/array');

class TransparentThenKeepSecondNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtilities.keepSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepSecondNode;
