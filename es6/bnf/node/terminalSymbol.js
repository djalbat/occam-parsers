'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class TerminalSymbolNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, TerminalSymbolNode); }
}

module.exports = TerminalSymbolNode;
