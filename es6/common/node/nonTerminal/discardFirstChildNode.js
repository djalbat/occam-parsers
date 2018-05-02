'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

const { discardFirst } = arrayUtilities;

class DiscardFirstChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = discardFirst(nodes), ///
          discardFirstChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardFirstChildNode, ruleName, childNodes);

    return discardFirstChildNode;
  }
}

module.exports = DiscardFirstChildNode;
