'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class ChoiceOfPartsNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    debugger
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ChoiceOfPartsNode); }
}

module.exports = ChoiceOfPartsNode;
