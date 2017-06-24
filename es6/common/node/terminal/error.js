'use strict';

const arrayUtil = require('../../../util/array'),
      TerminalNode = require('../terminal');

class ErrorNode extends TerminalNode {
  static fromNodesAndRuleName(nodes, ruleName) {
    const firstNode = arrayUtil.first(nodes),
          terminalNode = firstNode,  ///
          significantToken = terminalNode.getSignificantToken(),
          errorNode = TerminalNode.fromSignificantToken(significantToken, ErrorNode),
          error = true;

    significantToken.setError(error);

    return errorNode;
  }
}

module.exports = ErrorNode;
