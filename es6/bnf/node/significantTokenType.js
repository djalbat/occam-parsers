'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class SignificantTokenTypeNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, SignificantTokenTypeNode); }
}

module.exports = SignificantTokenTypeNode;
