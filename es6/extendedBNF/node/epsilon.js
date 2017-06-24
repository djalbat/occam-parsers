'use strict';

const EpsilonPart = require('../part/epsilon'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class EpsilonNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const epsilonPart = new EpsilonPart(noWhitespace);

    return epsilonPart;
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, EpsilonNode); }
}

module.exports = EpsilonNode;
