'use strict';

const arrayUtil = require('../../../util/array'),
      NonTerminalNode = require('../nonTerminal');

class KeepSecondChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtil.keepSecond(nodes),
          keepSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, KeepSecondChildNode);

    return keepSecondChildNode;
  }
}

module.exports = KeepSecondChildNode;
