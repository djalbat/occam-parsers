'use strict';

const arrayUtilities = require('../../../utilities/array');

const { keepFirst } = arrayUtilities;

class TransparentThenKeepFirstNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = keepFirst(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepFirstNode;
