'use strict';

const arrayUtilities = require('../../../utilities/array');

const { discardSecond } = arrayUtilities;

class TransparentThenDiscardSecondNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = discardSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardSecondNode;
