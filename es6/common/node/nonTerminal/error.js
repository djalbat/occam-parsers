'use strict';

const NonTerminalNode = require('../nonTerminal');

class ErrorNode extends NonTerminalNode {
  getSignificantToken() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          significantToken = terminalNode.getSignificantToken();

    return significantToken;
  }

  static fromNodesAndProductionName(nodes, productionName) {
    const firstNode = first(nodes),
          childNodes = [firstNode], ///
          errorNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ErrorNode);

    return errorNode;
  }
}

module.exports = ErrorNode;

function first(array) { return array[0]; }
