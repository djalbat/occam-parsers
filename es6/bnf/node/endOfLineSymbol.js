'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class EndOfLineSymbolNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, EndOfLineSymbolNode); }
}

module.exports = EndOfLineSymbolNode;
