'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

class DiscardFourthThenSecondChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtilities.discardFourthThenSecond(nodes),
          discardFourthThenSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardFourthThenSecondChildNode, ruleName, childNodes);

    return discardFourthThenSecondChildNode;
  }
}

module.exports = DiscardFourthThenSecondChildNode;
