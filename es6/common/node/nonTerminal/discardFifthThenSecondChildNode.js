'use strict';

const arrayUtilities = require('../../../utilities/array'),
      NonTerminalNode = require('../nonTerminal');

class DiscardFifthThenSecondChildNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtilities.discardFifthThenSecond(nodes),
          discardFifthThenSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardFifthThenSecondChildNode, ruleName, childNodes);

    return discardFifthThenSecondChildNode;
  }
}

module.exports = DiscardFifthThenSecondChildNode;
