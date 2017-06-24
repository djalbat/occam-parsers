'use strict';

const arrayUtil = require('../../../util/array'),
      NonTerminalNode = require('../nonTerminal');

class DiscardSecondChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtil.discardSecond(nodes),
          discardSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DiscardSecondChildNode);

    return discardSecondChildNode;
  }
}

module.exports = DiscardSecondChildNode;
