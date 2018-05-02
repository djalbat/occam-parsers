'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

const { keepFirst } = arrayUtilities;

class KeepFirstChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = keepFirst(nodes),
          keepFirstChildNode = NonTerminalNode.fromRuleNameAndChildNodes(KeepFirstChildNode, ruleName, childNodes);

    return keepFirstChildNode;
  }
}

module.exports = KeepFirstChildNode;
