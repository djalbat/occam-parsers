"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import NoWhitespacePart from "../../part/terminal/noWhitespace";

export default class NoWhitespacePartBNFNode extends NonTerminalNode {
  generatePart(continuation) {
    const noWhitespacePart = NoWhitespacePart.fromNothing();

    return noWhitespacePart;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(NoWhitespacePartBNFNode, ruleName, childNodes, precedence, opacity); }
}
