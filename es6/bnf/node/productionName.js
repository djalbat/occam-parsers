'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionNameNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ProductionNameNode); }
}

module.exports = ProductionNameNode;
