'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class GroupOfPartsNode extends NonTerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, GroupOfPartsNode); }
}

module.exports = GroupOfPartsNode;