'use strict';

const necessary = require('necessary');

const TerminalNode = require('../terminal');

const { array } = necessary,
      { first } = array;

class ErrorNode extends TerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const firstNode = first(nodes),
          terminalNode = firstNode,  ///
          significantToken = terminalNode.getSignificantToken(),
          errorNode = TerminalNode.fromSignificantToken(ErrorNode, significantToken),
          error = true;

    significantToken.setError(error);

    return errorNode;
  }
}

module.exports = ErrorNode;
