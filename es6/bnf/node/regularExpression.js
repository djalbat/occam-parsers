'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class RegularExpressionNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, RegularExpressionNode); }
}

module.exports = RegularExpressionNode;
