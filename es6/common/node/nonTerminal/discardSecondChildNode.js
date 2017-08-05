'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

class DiscardSecondChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtilities.discardSecond(nodes),
          discardSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardSecondChildNode, ruleName, childNodes);

    return discardSecondChildNode;
  }
}

module.exports = DiscardSecondChildNode;
