'use strict';

const arrayUtil = require('../../../util/array'),
      NonTerminalNode = require('../nonTerminal');

class DiscardFifthThenSecondChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtil.discardFifthThenSecond(nodes),
          discardFifthThenSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DiscardFifthThenSecondChildNode);

    return discardFifthThenSecondChildNode;
  }
}

module.exports = DiscardFifthThenSecondChildNode;
