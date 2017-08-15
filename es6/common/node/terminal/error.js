'use strict';

const NonTerminalNode = require('../nonTerminal');

class ErrorNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(ErrorNode, nodes, ruleName); }
}

module.exports = ErrorNode;
