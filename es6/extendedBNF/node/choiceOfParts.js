'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class ChoiceOfPartsNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ChoiceOfPartsNode); }
}

module.exports = ChoiceOfPartsNode;