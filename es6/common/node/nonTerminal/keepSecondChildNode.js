'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

class KeepSecondChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtilities.keepSecond(nodes),
          keepSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(KeepSecondChildNode, ruleName, childNodes);

    return keepSecondChildNode;
  }
}

module.exports = KeepSecondChildNode;
