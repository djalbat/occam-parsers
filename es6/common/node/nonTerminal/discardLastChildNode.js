'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

const { discardLast } = arrayUtilities;

class DiscardLastChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = discardLast(nodes), ///
          discardLastChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardLastChildNode, ruleName, childNodes);

    return discardLastChildNode;
  }
}

module.exports = DiscardLastChildNode;
