'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class ZeroOrMorePartsNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, ZeroOrMorePartsNode); }
}

module.exports = ZeroOrMorePartsNode;
