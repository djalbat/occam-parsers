'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class NoWhitespacePartNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, NoWhitespacePartNode); }
}

module.exports = NoWhitespacePartNode;
