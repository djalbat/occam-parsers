'use strict';

var NonTerminalNode = require('../nonTerminal');

class ErrorNode extends NonTerminalNode {
  getSignificantToken() {
    var childNodes = this.getChildNodes(),
        firstChildNode = first(childNodes),
        terminalNode = firstChildNode,  ///
        significantToken = terminalNode.getSignificantToken();

    return significantToken;
  }

  static fromNodesAndProductionName(nodes, productionName) {
    var firstNode = first(nodes),
        childNodes = [firstNode], ///
        errorNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ErrorNode);

    nodes = [errorNode]; ///

    return nodes;
  }
}

module.exports = ErrorNode;

function first(array) { return array[0]; }
