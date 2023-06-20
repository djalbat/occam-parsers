"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import NoWhitespacePart from "../../part/terminal/noWhitespace";

export default class NoWhitespacePartBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const noWhitespacePart = NoWhitespacePart.fromNothing();

    return noWhitespacePart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(NoWhitespacePartBNFNode, ruleName, childNodes); }
}
