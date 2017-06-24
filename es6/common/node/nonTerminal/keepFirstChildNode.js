'use strict';

const arrayUtil = require('../../../util/array'),
      NonTerminalNode = require('../nonTerminal');

class KeepFirstChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtil.keepFirst(nodes),
          keepFirstChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, KeepFirstChildNode);

    return keepFirstChildNode;
  }
}

module.exports = KeepFirstChildNode;
