'use strict';

const arrayUtilities = require('../../../utilities/array');

const { keepSecond } = arrayUtilities;

class TransparentThenKeepSecondNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    nodes = keepSecond(nodes);

    return nodes;
  }
}

module.exports = TransparentThenKeepSecondNode;
