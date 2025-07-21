"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import StartOfContentPart from "../../part/terminal/startOfContent";

export default class StartOfContentPartBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const startOfContentPart = StartOfContentPart.fromNothing();

    return startOfContentPart;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StartOfContentPartBNFNode, ruleName, childNodes, opacity, precedence); }
}
