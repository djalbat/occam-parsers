'use strict';

const arrayUtilities = require('../../../utilities/array');

const { keepLast } = arrayUtilities;

class TransparentThenKeepLastNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = keepLast(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepLastNode;
