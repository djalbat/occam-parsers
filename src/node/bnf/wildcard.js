"use strict";

import WildcardPart from "../../part/terminal/wildcard";
import NonTerminalNode from "../../node/nonTerminal";

export default class WildcardBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const wildcardPart = WildcardPart.fromNothing();

    return wildcardPart;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(WildcardBNFNode, ruleName, childNodes, ambiguous); }
}
