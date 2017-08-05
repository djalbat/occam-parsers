'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

class DiscardLastChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtilities.discardLast(nodes), ///
          discardLastChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardLastChildNode, ruleName, childNodes);

    return discardLastChildNode;
  }
}

module.exports = DiscardLastChildNode;
