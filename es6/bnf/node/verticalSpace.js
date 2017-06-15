'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class VerticalSpaceNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, VerticalSpaceNode); }
}

module.exports = VerticalSpaceNode;
