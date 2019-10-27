'use strict';

const EndOfLinePart = require('../part/terminal/endOfLine'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class EndOfLineNode extends NonTerminalNode {
  generatePart(nonWhitespace, lookAhead) {
    const endOfLinePart = new EndOfLinePart(nonWhitespace);

    return endOfLinePart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(EndOfLineNode, ruleName, childNodes); }
}

module.exports = EndOfLineNode;
