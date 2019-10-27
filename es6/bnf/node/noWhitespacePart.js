'use strict';

const NoWhitespacePart = require('../part/terminal/noWhitespace'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class NoWhitespacePartNode extends NonTerminalNode {
  generatePart(nonWhitespace, lookAhead) {
    const noWhitespacePart = new NoWhitespacePart(nonWhitespace);

    return noWhitespacePart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(NoWhitespacePartNode, ruleName, childNodes); }
}

module.exports = NoWhitespacePartNode;
