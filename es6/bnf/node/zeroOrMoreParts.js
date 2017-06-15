'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class ZeroOrMorePartsNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ZeroOrMorePartsNode); }
}

module.exports = ZeroOrMorePartsNode;
