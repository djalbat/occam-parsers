"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import NoWhitespacePart from "../../part/terminal/noWhitespace";

export default class NoWhitespacePartBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const noWhitespacePart = NoWhitespacePart.fromNothing();

    return noWhitespacePart;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(NoWhitespacePartBNFNode, ruleName, childNodes, opacity, precedence); }
}
