"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import StartOfContentPart from "../../part/terminal/startOfContent";

export default class StartOfContentPartBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const startOfContentPart = StartOfContentPart.fromNothing();

    return startOfContentPart;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(StartOfContentPartBNFNode, ruleName, childNodes, opacity); }
}
