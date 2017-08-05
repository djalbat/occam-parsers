'use strict';

const arrayUtilities = require('../../../utilities/array');

class TransparentThenDiscardLastNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtilities.discardLast(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardLastNode;
