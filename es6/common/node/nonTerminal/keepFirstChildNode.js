'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

class KeepFirstChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtilities.keepFirst(nodes),
          keepFirstChildNode = NonTerminalNode.fromRuleNameAndChildNodes(KeepFirstChildNode, ruleName, childNodes);

    return keepFirstChildNode;
  }
}

module.exports = KeepFirstChildNode;
