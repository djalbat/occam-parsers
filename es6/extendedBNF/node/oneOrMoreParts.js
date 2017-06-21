'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class OneOrMorePartsNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, OneOrMorePartsNode); }
}

module.exports = OneOrMorePartsNode;
