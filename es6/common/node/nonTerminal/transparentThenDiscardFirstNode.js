'use strict';

const arrayUtilities = require('../../../utilities/array');

class TransparentThenDiscardFirstNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtilities.discardFirst(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardFirstNode;
