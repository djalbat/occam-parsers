'use strict';

var NonTerminalNode = require('../common/node/nonTerminal');

class ErrorsNode extends NonTerminalNode {
  static fromProductionNameAndChildNodes(productionName, childNodes) { return NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ErrorsNode); }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ErrorsNode); }
}

module.exports = ErrorsNode;
