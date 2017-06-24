'use strict';

const arrayUtil = require('../../../util/array'),
      NonTerminalNode = require('../nonTerminal');

class KeepLastChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtil.keepLast(nodes),
          keepLastChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, KeepLastChildNode);

    return keepLastChildNode;
  }
}

module.exports = KeepLastChildNode;
