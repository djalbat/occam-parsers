"use strict";

import EndOfLinePart from "../../part/terminal/endOfLine";
import NonTerminalNode from "../../node/nonTerminal";

export default class EndOfLineBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const endOfLinePart = EndOfLinePart.fromNothing();

    return endOfLinePart;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(EndOfLineBNFNode, ruleName, childNodes, opacity, precedence); }
}
