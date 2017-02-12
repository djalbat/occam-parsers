'use strict';

var NonTerminalNode = require('../common/node/nonTerminal');

class ErrorsNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ErrorsNode); }
}

module.exports = ErrorsNode;
