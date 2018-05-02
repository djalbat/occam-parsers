'use strict';

const arrayUtilities = require('../../../utilities/array');

const { discardLast } = arrayUtilities;

class TransparentThenDiscardLastNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = discardLast(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardLastNode;
