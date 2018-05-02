'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

const { keepSecond } = arrayUtilities;

class KeepSecondChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = keepSecond(nodes),
          keepSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(KeepSecondChildNode, ruleName, childNodes);

    return keepSecondChildNode;
  }
}

module.exports = KeepSecondChildNode;
