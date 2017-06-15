'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class PartNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, PartNode); }
}

module.exports = PartNode;
