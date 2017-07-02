'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class OptionalPartNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, OptionalPartNode); }
}

module.exports = OptionalPartNode;
