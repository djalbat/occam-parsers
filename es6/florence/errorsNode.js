'use strict';

var NonTerminalNode = require('../common/node/nonTerminal');

class ErrorsNode extends NonTerminalNode {
  static fromProductionNameAndChildNodes(productionName, childNodes) { NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ErrorsNode); }
}

module.exports = ErrorsNode;
