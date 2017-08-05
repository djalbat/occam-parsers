'use strict';

const arrayUtilities = require('../../../utilities/array');

class TransparentThenKeepFirstNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = arrayUtilities.keepFirst(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepFirstNode;
