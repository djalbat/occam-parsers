'use strict';

var TerminalNode = require('../../bnf/node/terminal');

class ErrorNode extends TerminalNode {
  update() {
    var productionName = this.getProductionName(),
        significantToken = this.getSignificantToken(),
        significantTokenType = productionName;  ///

    significantToken.setType(significantTokenType);
  }

  static fromNodes(nodes, productionName) {
    var firstNode = first(nodes),
        terminalNode = firstNode, ///
        significantToken = terminalNode.getSignificantToken(),
        errorNode = new ErrorNode(significantToken, productionName);

    nodes = [errorNode]; ///

    return nodes;
  }
}

module.exports = ErrorNode;

function first(array) { return array[0]; }
