'use strict';

const arrayUtil = require('../../../util/array'),
      NonTerminalNode = require('../nonTerminal');

class TransparentFirstChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const firstNode = arrayUtil.first(nodes),
          childNodes = firstNode.getChildNodes(),
          transparentFirstChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, TransparentFirstChildNode);

    return transparentFirstChildNode;
  }
}

module.exports = TransparentFirstChildNode;
