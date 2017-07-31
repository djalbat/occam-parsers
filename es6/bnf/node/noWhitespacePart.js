'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class NoWhitespacePartNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(NoWhitespacePartNode, nodes, ruleName); }
}

module.exports = NoWhitespacePartNode;
