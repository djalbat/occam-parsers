'use strict';

const arrayUtil = require('../../../util/array'),
      NonTerminalNode = require('../nonTerminal');

class DiscardOddChildNodes extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtil.discardOdd(nodes), ///
          discardOddChildNodes = NonTerminalNode.fromRuleNameAndChildNodes(DiscardOddChildNodes, ruleName, childNodes);

    return discardOddChildNodes;
  }
}

module.exports = DiscardOddChildNodes;
