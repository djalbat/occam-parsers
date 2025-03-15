"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import NoWhitespacePart from "../../part/terminal/noWhitespace";

export default class NoWhitespacePartBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const noWhitespacePart = NoWhitespacePart.fromNothing();

    return noWhitespacePart;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(NoWhitespacePartBNFNode, ruleName, childNodes, opacity); }
}
