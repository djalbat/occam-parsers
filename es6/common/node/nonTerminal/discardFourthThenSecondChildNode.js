'use strict';

const arrayUtil = require('../../../util/array'),
      NonTerminalNode = require('../nonTerminal');

class DiscardFourthThenSecondChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtil.discardFourthThenSecond(nodes),
          discardFourthThenSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DiscardFourthThenSecondChildNode);

    return discardFourthThenSecondChildNode;
  }
}

module.exports = DiscardFourthThenSecondChildNode;
