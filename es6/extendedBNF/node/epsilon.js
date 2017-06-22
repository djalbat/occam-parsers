'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class EpsilonNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    const EpsilonPart = Parts['EpsilonPart'],
          epsilonPart = new EpsilonPart(noWhitespace);

    return epsilonPart;
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, EpsilonNode); }
}

module.exports = EpsilonNode;
