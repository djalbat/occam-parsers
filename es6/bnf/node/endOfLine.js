'use strict';

const EndOfLinePart = require('../part/endOfLine'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class EndOfLineNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const endOfLinePart = new EndOfLinePart(noWhitespace);

    return endOfLinePart;
  }

  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(EndOfLineNode, nodes, ruleName); }
}

module.exports = EndOfLineNode;
