"use strict";

const NoWhitespacePart = require("../part/terminal/noWhitespace"),
      NonTerminalNode = require("../../common/node/nonTerminal");

class NoWhitespacePartNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const noWhitespacePart = new NoWhitespacePart();

    return noWhitespacePart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(NoWhitespacePartNode, ruleName, childNodes); }
}

module.exports = NoWhitespacePartNode;
