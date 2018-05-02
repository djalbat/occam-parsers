'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

const { keepLast } = arrayUtilities;

class KeepLastChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = keepLast(nodes),
          keepLastChildNode = NonTerminalNode.fromRuleNameAndChildNodes(KeepLastChildNode, ruleName, childNodes);

    return keepLastChildNode;
  }
}

module.exports = KeepLastChildNode;
