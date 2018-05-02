'use strict';

const arrayUtilities = require('../../../utilities/array');

const { discardFirst } = arrayUtilities;

class TransparentThenDiscardFirstNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = discardFirst(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardFirstNode;
