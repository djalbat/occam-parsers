'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class GroupOfPartsNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    debugger
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, GroupOfPartsNode); }
}

module.exports = GroupOfPartsNode;
