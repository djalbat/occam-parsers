'use strict';

const arrayUtilities = require('../../../utilities/array');

class TransparentThenDiscardSecondNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtilities.discardSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardSecondNode;
