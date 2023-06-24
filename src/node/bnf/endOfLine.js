"use strict";

import EndOfLinePart from "../../part/terminal/endOfLine";
import NonTerminalNode from "../../node/nonTerminal";

export default class EndOfLineBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const endOfLinePart = EndOfLinePart.fromNothing();

    return endOfLinePart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(EndOfLineBNFNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(EndOfLineBNFNode, ruleName, childNodes, precedence); }
}
