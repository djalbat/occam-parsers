"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import NoWhitespacePart from "../../part/terminal/noWhitespace";

export default class NoWhitespacePartBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const noWhitespacePart = NoWhitespacePart.fromNothing();

    return noWhitespacePart;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(NoWhitespacePartBNFNode, ruleName, childNodes, ambiguous); }
}
