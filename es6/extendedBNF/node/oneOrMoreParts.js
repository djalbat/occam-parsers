'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class OneOrMorePartsNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, OneOrMorePartsNode); }
}

module.exports = OneOrMorePartsNode;
