"use strict";

import WildcardPart from "../../part/terminal/wildcard";
import NonTerminalNode from "../../node/nonTerminal";

export default class WildcardBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const wildcardPart = WildcardPart.fromNothing();

    return wildcardPart;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(WildcardBNFNode, ruleName, childNodes, opacity); }
}
