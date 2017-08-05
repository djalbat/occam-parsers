'use strict';

const arrayUtilities = require('../../../utilities/array');

class TransparentThenKeepLastNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtilities.keepLast(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepLastNode;
