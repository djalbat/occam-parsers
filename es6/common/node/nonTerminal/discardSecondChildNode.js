'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

const { discardSecond } = arrayUtilities;

class DiscardSecondChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = discardSecond(nodes),
          discardSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardSecondChildNode, ruleName, childNodes);

    return discardSecondChildNode;
  }
}

module.exports = DiscardSecondChildNode;
