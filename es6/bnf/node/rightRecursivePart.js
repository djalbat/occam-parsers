'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class RightRecursivePartNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(RightRecursivePartNode, nodes, ruleName); }
}

module.exports = RightRecursivePartNode;