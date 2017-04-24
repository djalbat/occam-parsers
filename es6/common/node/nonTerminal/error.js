'use strict';

const TerminalNode = require('../terminal');

class ErrorNode extends TerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    const firstNode = first(nodes),
          terminalNode = firstNode,  ///
          significantToken = terminalNode.getSignificantToken(),
          errorNode = TerminalNode.fromSignificantToken(significantToken, ErrorNode),
          error = true;

    significantToken.setError(error);

    return errorNode;
  }
}

module.exports = ErrorNode;

function first(array) { return array[0]; }
