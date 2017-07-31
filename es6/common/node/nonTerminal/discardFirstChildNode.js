'use strict';

const arrayUtil = require('../../../util/array'),
      NonTerminalNode = require('../nonTerminal');

class DiscardFirstChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtil.discardFirst(nodes), ///
          discardFirstChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardFirstChildNode, ruleName, childNodes);

    return discardFirstChildNode;
  }
}

module.exports = DiscardFirstChildNode;
