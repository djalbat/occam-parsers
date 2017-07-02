'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class ChoiceOfPartsNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, ChoiceOfPartsNode); }
}

module.exports = ChoiceOfPartsNode;