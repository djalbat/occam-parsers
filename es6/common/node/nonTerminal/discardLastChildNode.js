'use strict';

const arrayUtil = require('../../../util/array'),
      NonTerminalNode = require('../nonTerminal');

class DiscardLastChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtil.discardLast(nodes), ///
          discardLastChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardLastChildNode, ruleName, childNodes);

    return discardLastChildNode;
  }
}

module.exports = DiscardLastChildNode;
