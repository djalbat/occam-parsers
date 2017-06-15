'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class OptionalPartNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, OptionalPartNode); }
}

module.exports = OptionalPartNode;
