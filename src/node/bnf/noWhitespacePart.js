"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import NoWhitespacePart from "../../part/terminal/noWhitespace";

export default class NoWhitespacePartBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const noWhitespacePart = new NoWhitespacePart();

    return noWhitespacePart;
  }

  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(NoWhitespacePartBNFNode, ruleName, precedence, childNodes); }
}
