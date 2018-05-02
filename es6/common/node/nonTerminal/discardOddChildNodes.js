'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

const { discardOdd } = arrayUtilities;

class DiscardOddChildNodes extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = discardOdd(nodes), ///
          discardOddChildNodes = NonTerminalNode.fromRuleNameAndChildNodes(DiscardOddChildNodes, ruleName, childNodes);

    return discardOddChildNodes;
  }
}

module.exports = DiscardOddChildNodes;
