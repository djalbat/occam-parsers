'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

class KeepLastChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtilities.keepLast(nodes),
          keepLastChildNode = NonTerminalNode.fromRuleNameAndChildNodes(KeepLastChildNode, ruleName, childNodes);

    return keepLastChildNode;
  }
}

module.exports = KeepLastChildNode;
